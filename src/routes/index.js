const {Router} =  require('express');
const router= Router();

router.get('/',(req,res)=> {
    const data = {
        "name":"ANFEPEMA",
        "website":"anfepema.com"
    };
    res.json(data);
});

module.exports=router;