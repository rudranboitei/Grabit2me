import { MetadataRoute } from 'next';
const manifest: MetadataRoute.Manifest = {
  name: 'test',
  share_target: {
    action: '/',
    method: 'GET',
    params: {
      title: 'title',
      text: 'text',
      url: 'url'
    }
  }
} as any;
