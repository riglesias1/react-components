let host = process.env.DIR_MEDIA.host
let token = process.env.DIR_MEDIA.token_shared

if (!host.endsWith('/')) {
    host = host + '/'
}

export const getMedia = (path) => {
    if (!path.startsWith('/')) {
        path = '/' + path
    }

    return host + 'api/public/dl/' + token + path;
};

export default getMedia;