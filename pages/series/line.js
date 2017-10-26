// @flow

import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/series/line/line.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{

        'pages/series/line/LineChartWithStyle.js': {
          js: require('docs/src/pages/series/line/LineChartWithStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/series/line/LineChartWithStyle'), 'utf8')
`,
        },

        'pages/series/line/LineSeries1.js': {
          js: require('docs/src/pages/series/line/LineSeries1').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/series/line/LineSeries1'), 'utf8')
`,
        },

        'pages/series/line/LineSeries2.js': {
          js: require('docs/src/pages/series/line/LineSeries2').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/series/line/LineSeries2'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
