import {Component, OnInit} from '@angular/core';
import {FilesystemDirectory, FilesystemEncoding, Plugins} from '@capacitor/core';
import {File} from '@ionic-native/file/ngx';

const {Filesystem} = Plugins;

@Component({
    selector: 'app-filesystem',
    templateUrl: './filesystem.component.html',
    styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

    constructor(private file: File) {
    }

    ngOnInit() {
    }

    /* NB : create any missing parent directories as well */
    fileWrite() {
        try {
            Filesystem.writeFile({
                path: 'secrets/text.txt',
                data: 'This is a test',
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
            });

            Filesystem.writeFile({
                path: 'secrets2/secrets/text.txt',
                data: 'This is a test',
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
            });

            Filesystem.writeFile({
                path: 'secrets/hnl/text2.txt',
                data: 'This is a test',
                directory: FilesystemDirectory.Documents,
                encoding: FilesystemEncoding.UTF8
            });

        } catch (e) {
            console.error('Unable to write file (press mkdir first, silly)', e);
        }
        console.log('Wrote file');
    }

    async fileRead() {
        const contents = await Filesystem.readFile({
            path: 'secrets/text.txt',
            directory: FilesystemDirectory.Documents,
            encoding: FilesystemEncoding.UTF8
        });
        console.log(contents);
    }

    async fileAppend() {
        await Filesystem.appendFile({
            path: 'secrets/text.txt',
            data: 'MORE TESTS',
            directory: FilesystemDirectory.Documents,
            encoding: FilesystemEncoding.UTF8
        });
        console.log('Appended');
    }

    async fileDelete() {
        await Filesystem.deleteFile({
            path: 'secrets/text.txt',
            directory: FilesystemDirectory.Documents
        });
        console.log('Deleted');
    }

    async mkdir() {
        try {
            const ret = await Filesystem.mkdir({
                path: 'secrets',
                directory: FilesystemDirectory.Documents,
                createIntermediateDirectories: false
            });
            console.log('Made dir', ret);
        } catch (e) {
            console.error('Unable to make directory', e);
        }
    }

    async rmdir(path: string = 'secrets') {
        console.log('to delete : ', path);
        try {
            const ret = await Filesystem.rmdir({
                path: path,
                directory: FilesystemDirectory.Documents
            });
            console.log('Removed dir', ret);
        } catch (e) {
            console.error('Unable to remove directory', e);
        }
    }

    async rmdirRecursive(path: string = 'secrets') {
        console.log('Trigger rmdirRecursive ', path);
        // READ
        await Filesystem.readdir({
            path: path,
            directory: FilesystemDirectory.Documents
        }).then(async (result) => {
            console.log('Read dir ', result);
            for await (const fileName of result.files) {
                console.log('for await fileName =', fileName);
                const statResult  = await Filesystem.stat({
                    path: `${path}/${fileName}`,
                    directory: FilesystemDirectory.Documents
                });
                console.log('for await STAT', statResult);
                if (statResult.type === 'file') {
                    await Filesystem.deleteFile({
                        path: `${path}/${fileName}`,
                        directory: FilesystemDirectory.Documents
                    });
                    console.log('for await Deleted file ', statResult.uri);
                } else if (statResult.type === 'directory') {
                    console.log('for await GO trigger rmdirRecursive ', `${path}/${fileName}`);
                    await this.rmdirRecursive(`${path}/${fileName}`);
                }
            }
            // delete dir
            this.rmdir(path);
        }, (err) => {
            console.log(err);
        });
    }

    async readdir() {
        try {
            const ret = await Filesystem.readdir({
                path: 'secrets',
                directory: FilesystemDirectory.Documents
            });
            console.log('Read dir', ret);
        } catch (e) {
            console.error('Unable to read dir', e);
        }
    }

    async listDir() {
        try {
            const ret = await Filesystem.readdir({
                path: '',
                directory: FilesystemDirectory.Documents
            });
            console.log('List root dir', ret);
        } catch (e) {
            console.error('Unable List root dir', e);
        }
    }

    async getUri() {
        try {
            const ret = await Filesystem.getUri({
                path: 'text.txt',
                directory: FilesystemDirectory.Application
            });
            alert(ret.uri);
        } catch (e) {
            console.error('Unable to stat file', e);
        }
    }

    async stat() {
        try {
            const ret = await Filesystem.stat({
                path: 'secrets/text.txt',
                directory: FilesystemDirectory.Documents
            });
            console.log('STAT', ret);
        } catch (e) {
            console.error('Unable to stat file', e);
        }
    }

    async directoryTest() {
        try {
            await Filesystem.writeFile({
                path: 'text.txt',
                data: 'This is a test',
                directory: FilesystemDirectory.Data,
                encoding: FilesystemEncoding.UTF8
            });

            const stat = await Filesystem.stat({
                path: 'text.txt',
                directory: FilesystemDirectory.Data
            });

            const data = await Filesystem.readFile({
                path: stat.uri
            });

            console.log('Stat 1', stat);
            console.log(data);

        } catch (e) {
            console.error('Unable to write file (press mkdir first, silly)', e);
        }
        console.log('Wrote file');
    }
}
