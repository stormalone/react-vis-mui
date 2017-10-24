// @flow

import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/demos/semiotic/semiotic.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/demos/semiotic/SimpleAppBar.js': {
          js: require('docs/src/pages/demos/semiotic/SimpleAppBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/semiotic/SimpleAppBar'), 'utf8')
`,
        },
        'pages/demos/semiotic/ButtonAppBar.js': {
          js: require('docs/src/pages/demos/semiotic/ButtonAppBar').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/demos/semiotic/ButtonAppBar'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
