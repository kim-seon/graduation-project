var request = require('request');
const express = require('express');
const router = express.Router();
const serviceKey = 'SutH0Y4nGuUCdZHtSVrjnaRle9CT7Do1j7h9Tv9U7Qi2Ha%2FAHzeSV1MatoUg%2BYb43vFih%2FlHXDNC34l%2B15LfxA%3D%3D';

router.get('/animalList', (req, res) => {
    var url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic';
    var queryParams = '?' + encodeURIComponent("serviceKey") + '=' + serviceKey; /* Service Key*/
    queryParams += '&' + encodeURIComponent("bgnde") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("endde") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("upkind") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("kind") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("upr_cd") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("org_cd") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("care_reg_no") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("state") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("neuter_yn") + '=' + encodeURIComponent(''); /* */
    queryParams += '&' + encodeURIComponent("pageNo") + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent("numOfRows") + '=' + encodeURIComponent('12'); /* */
    queryParams += '&' + encodeURIComponent("_type") + '=' + encodeURIComponent('json'); /* */

    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        var obj = JSON.parse(body)
        if(error) { return res.status(400).send(error) }
        res.status(200).json({ success: true, obj })
    });
})


module.exports = router;