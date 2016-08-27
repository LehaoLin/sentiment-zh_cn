/**
 * Remove special characters and returns an array of tokens (words).
 *
 * @param   {string}  input
 *
 * @return  {array}
 */

var Segment = require('segment');
var segment = new Segment();
segment.useDefault();

var D_U_protection = require('../build/D_U_protection.json');

module.exports = function (input) {
	var seg_i = segment.doSegment(input, {stripPunctuation: true});
	var seg_o = [];
	for (var i in seg_i)
	{
		var it = seg_i[i].w.replace(/[的地得着了过]$/g, '');
		if ((i >= 1) && (seg_i[i].p == 8192))
		{
			if(D_U_protection.indexOf(seg_i[i - 1].w + seg_i[i].w) != -1)
			{
				seg_o.pop();
				seg_o.push(seg_i[i - 1].w + seg_i[i].w);
			}
		}
		if(D_U_protection.indexOf(seg_i[i].w) != -1)
			seg_o.push(seg_i[i].w)
		else if(it) seg_o.push(it);
	}
    return seg_o;
};
