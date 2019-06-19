import { Component, OnInit } from '@angular/core';
import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

const { Filesystem } = Plugins;

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fileWrite() {
    try {
      Plugins.Filesystem.writeFile({
        path: 'secrets/text.txt',
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
    const contents = await Plugins.Filesystem.readFile({
      path: 'secrets/text.txt',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
    console.log(contents);
  }

  async fileAppend() {
    await Plugins.Filesystem.appendFile({
      path: 'secrets/text.txt',
      data: 'MORE TESTS',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
    console.log('Appended');
  }

  async fileDelete() {
    await Plugins.Filesystem.deleteFile({
      path: 'secrets/text.txt',
      directory: FilesystemDirectory.Documents
    });
    console.log('Deleted');
  }

  async mkdir() {
    try {
      const ret = await Plugins.Filesystem.mkdir({
        path: 'secrets',
        directory: FilesystemDirectory.Documents,
        createIntermediateDirectories: false
      });
      console.log('Made dir', ret);
    } catch (e) {
      console.error('Unable to make directory', e);
    }
  }

  async rmdir() {
    try {
      const ret = await Plugins.Filesystem.rmdir({
        path: 'secrets',
        directory: FilesystemDirectory.Documents
      });
      console.log('Removed dir', ret);
    } catch (e) {
      console.error('Unable to remove directory', e);
    }
  }

  async readdir() {
    try {
      const ret = await Plugins.Filesystem.readdir({
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
      const ret = await Plugins.Filesystem.readdir({
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
      const ret = await Plugins.Filesystem.getUri({
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
      const ret = await Plugins.Filesystem.stat({
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
      await Plugins.Filesystem.writeFile({
        path: 'text.txt',
        data: 'This is a test',
        directory: FilesystemDirectory.Data,
        encoding: FilesystemEncoding.UTF8
      });

      const stat = await Plugins.Filesystem.stat({
        path: 'text.txt',
        directory: FilesystemDirectory.Data
      });

      const data = await Plugins.Filesystem.readFile({
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
