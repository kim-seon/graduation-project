const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

//role 0: 일반회원, role 1: 보호소 직원 회원
router.get('/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        email: req.user.email,
        isAuth: true,
        nickname: req.user.nickname,
        role: req.user.role
    })
})

router.post('/register', (req, res) => {
    //회원가입 시 필요한 정보들을 클라이언트에서 가져오고 DB에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post('/checkId', (req, res) => {
    const {email} = req.body
    const user = User.findOne({email})
    if(user) {
        res.send('2')
    }
})

router.post('/login', (req, res) => {
    //요청된 이메일을 DB에 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            });
        };

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) 
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." });
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                //res.cookie('w_authExp', user.tokenExp);
                res.cookie('w_auth', user.token)
                    .status(200)
                    .json({ loginSuccess: true, userId: user._id })
            });
        });
    });
});

router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "" },
    (err, user) => {
        if(err) return res.json({ success: false, err });
        //res.clearCookie('w_authExp');
        //res.clearCookie('w_auth');
        return res.status(200).send({
            success: true
        });
    });
});

module.exports = router;