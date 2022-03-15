import Raven from "raven-js";

function init() {
    Raven.config(
        'https://483eb7d280e744f3aaea03ee9b2b645e@o1159020.ingest.sentry.io/6242585',
        {
        release: '1-0-0',
        environment: 'development'
    }).install();
}

function log(error) {
    console.error(error);
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    init,
    log
}