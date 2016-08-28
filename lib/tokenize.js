/**
 * Remove special characters and returns an array of tokens (words).
 *
 * @param   {string}  input
 *
 * @return  {array}
 */

var Segment = require('node-analyzer');
var segment = new Segment();

var D_U_protection = require('../build/D_U_protection.json');

module.exports = function (input) {
	var seg_i = segment.analyze(input, {stripPunctuation: true}).split(" ");
	var seg_o = [];
	for (var i in seg_i)
	{
		var it = seg_i[i].replace(/[的得着了过]$/g, '');
		if (i >= 1)
		{
			if(D_U_protection.indexOf(seg_i[i - 1] + seg_i[i]) != -1)
			{
				seg_o.pop();
				seg_o.push(seg_i[i - 1] + seg_i[i]);
			}
		}
		if(D_U_protection.indexOf(seg_i[i]) != -1)
			seg_o.push(seg_i[i])
		else if(it) seg_o.push(it);
	}
    return seg_o;
};
