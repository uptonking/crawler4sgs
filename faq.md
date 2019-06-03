# faq 

## 三国杀爬虫目标是什么  

自动爬取游戏中的武将、皮肤数据 => 输出excel => 交互式表格

## 游戏数据相关

- 未加密，可通过unzip解压  
    - sgsGame.sgs
    - laya.sgs
    
- 加密的文件，需要先解密，再解压  
    - GeneralSkinInfoConfig.sgs
    - Achievement.sgs

- url  
`http://web.sanguosha.com/newsgs/pc/res/config/Config.sgs`     
是一个简单的压缩文件，无加密，包含其他所有加密的配置文件  

- json转换xlsx()  
未打钩的json文件没有头部标记 `github.com/davyxu/tabtoy`  
        
- [x] 皮肤编码及故事1173-GeneralSkinInfoConfig.json - SkinConf
- [x] 皮肤台词5581-GeneralSkinSkillDialogConfig.json - DialogConf
- [x] 皮肤收藏册3-GeneralSkinSuitConfig.json - SkinSuitConf
- [x] 武将编码及技能提示381-GameGeneralConfig.json - GeneralConf
- [ ] 武将卡牌编码及画师387-GeneralCards.json - Cards.card
- [ ] 卡牌编码447-Cards.json - Cards.card
- [ ] 卡牌描述及武将技能描述703-Skills.json  - Skills.skill  
- [x] 三国秀套装187-GameDressSuitConfig.json  - DressSuitConf
