// @flow

import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/series/arc/arc.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      series={{
        'pages/series/arc/ArcSeries1.js': {
          js: require('docs/src/pages/series/arc/ArcSeries1').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/series/arc/ArcSeries1'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
