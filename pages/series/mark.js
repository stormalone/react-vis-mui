// @flow

import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/series/mark/mark.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/series/mark/MarkSeries1.js': {
          js: require('docs/src/pages/series/mark/MarkSeries1').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/series/mark/MarkSeries1'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
