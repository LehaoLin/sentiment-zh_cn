## sentiment-zh_cn_web
#### 基于本地化的AFINN的中文nodejs情感分析库

本项目为[sentiment-zh_cn](https://github.com/omegacoleman/sentiment-zh_cn)的web/browser的fork，sentiment-zh_cn项目为[sentiment](https://github.com/thisandagain/sentiment/)项目的中文fork。

**因为sentiment-zh_cn项目中的node-analyzer依赖无法在webpack环境下使用，所以将相关分词依赖包换成[sengmentit](https://github.com/linonetwo/segmentit)**

基于本地化的[AFINN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010)词库对中文文本进行[情感分析](http://en.wikipedia.org/wiki/Sentiment_analysis)。

sentiment-zh_cn在build/目录下提供一份编译AFINN词库的工具和用于保护助语素的源文件。

### 安装
```bash
npm install sentiment-zh_cn_web
```

### 用法
```javascript
var sentiment = require('sentiment-zh_cn_web');

var r1 = sentiment('网络不是法外之地。党政机关微信工作群是展示、交流、沟通、讨论工作的平台，属于“公共场所”，党员领导干部是公众人物，一言一行都代表着党和政府的形象。在微信群转发淫秽图片，既破坏了网络环境，危害他人身心健康，又违反了工作纪律、生活纪律，损害了党和政府形象，造成不良影响，必然要受到党纪处理。随即，当地纪委也迅速介入了调查。');
console.dir(r1);
```

运行结果为：

```javascript
{ score: -6,
  comparative: -0.08955223880597014,
  tokens:
   [ '网络',
     '不是',
     '法',
     '外', ……],
  words: [ '迅速', '影响', '损害', '违反', '健康', '危害', '破坏' ],
  positive: [ '迅速', '健康' ],
  negative: [ '影响', '损害', '违反', '危害', '破坏' ] }
```

### 增加或覆盖词汇评分
在参数列表里增加一个包含自定义词汇评分的字典即可。

```javascript
var sentiment = require('sentiment-zh_cn_web');

var r2 = sentiment('他妈的你不想活了？', {'妈的': -10});
console.dir(r2);
```

```javascript
{ score: -10,
  comparative: -2,
  tokens: [ '他', '妈的', '你', '不想', '活' ],
  words: [ '妈的' ],
  positive: [],
  negative: [ '妈的' ] }
```