-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: eip
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `eip`
--

/*!40000 DROP DATABASE IF EXISTS `eip`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `eip` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `eip`;

--
-- Table structure for table `aboutus`
--

DROP TABLE IF EXISTS `aboutus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aboutus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `subtitle` varchar(200) DEFAULT NULL COMMENT '副标题',
  `content` longtext NOT NULL COMMENT '内容',
  `picture1` longtext COMMENT '图片1',
  `picture2` longtext COMMENT '图片2',
  `picture3` longtext COMMENT '图片3',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='关于我们';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutus`
--

LOCK TABLES `aboutus` WRITE;
/*!40000 ALTER TABLE `aboutus` DISABLE KEYS */;
INSERT INTO `aboutus` VALUES (1,'2023-01-24 11:33:22','关于我们','ABOUT US','不管你想要怎样的生活，你都要去努力争取，不多尝试一些事情怎么知道自己适合什么、不适合什么呢?\n你说你喜欢读书，让我给你列书单，你还问我哪里有那么多时间看书;你说自己梦想的职业是广告文案，问我如何成为一个文案，应该具备哪些素质;你说你计划晨跑，但总是因为学习、工作辛苦或者身体不舒服第二天起不了床;你说你一直梦想一个人去长途旅行，但是没钱，父母觉得危险。其实，我已经厌倦了你这样说说而已的把戏，我觉得就算我告诉你如何去做，你也不会照做，因为你根本什么都不做。','upload/aboutus_picture1.jpg','upload/aboutus_picture2.jpg','upload/aboutus_picture3.jpg');
/*!40000 ALTER TABLE `aboutus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','upload/picture1.jpg'),(2,'picture2','upload/picture2.jpg'),(3,'picture3','upload/picture3.jpg');
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jiuyexinxi`
--

DROP TABLE IF EXISTS `jiuyexinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jiuyexinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `touxiang` longtext COMMENT '头像',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shoujihaoma` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `zhuanye` varchar(200) DEFAULT NULL COMMENT '专业',
  `jiuyeqiye` varchar(200) NOT NULL COMMENT '就业企业',
  `jiuyegangwei` varchar(200) NOT NULL COMMENT '就业岗位',
  `qiyedizhi` varchar(200) DEFAULT NULL COMMENT '企业地址',
  `jiuyeriqi` date NOT NULL COMMENT '就业日期',
  `beizhu` varchar(200) DEFAULT NULL COMMENT '备注',
  `dengjishijian` datetime DEFAULT NULL COMMENT '登记时间',
  `userid` bigint(20) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8 COMMENT='就业信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jiuyexinxi`
--

LOCK TABLES `jiuyexinxi` WRITE;
/*!40000 ALTER TABLE `jiuyexinxi` DISABLE KEYS */;
INSERT INTO `jiuyexinxi` VALUES (91,'2023-01-24 11:33:21','学号1','学生姓名1','upload/jiuyexinxi_touxiang1.jpg,upload/jiuyexinxi_touxiang2.jpg,upload/jiuyexinxi_touxiang3.jpg','性别1','手机号码1','专业1','就业企业1','就业岗位1','企业地址1','2023-01-24','备注1','2023-01-24 19:33:21',1),(92,'2023-01-24 11:33:21','学号2','学生姓名2','upload/jiuyexinxi_touxiang2.jpg,upload/jiuyexinxi_touxiang3.jpg,upload/jiuyexinxi_touxiang4.jpg','性别2','手机号码2','专业2','就业企业2','就业岗位2','企业地址2','2023-01-24','备注2','2023-01-24 19:33:21',2),(93,'2023-01-24 11:33:21','学号3','学生姓名3','upload/jiuyexinxi_touxiang3.jpg,upload/jiuyexinxi_touxiang4.jpg,upload/jiuyexinxi_touxiang5.jpg','性别3','手机号码3','专业3','就业企业3','就业岗位3','企业地址3','2023-01-24','备注3','2023-01-24 19:33:21',3),(94,'2023-01-24 11:33:21','学号4','学生姓名4','upload/jiuyexinxi_touxiang4.jpg,upload/jiuyexinxi_touxiang5.jpg,upload/jiuyexinxi_touxiang6.jpg','性别4','手机号码4','专业4','就业企业4','就业岗位4','企业地址4','2023-01-24','备注4','2023-01-24 19:33:21',4),(95,'2023-01-24 11:33:21','学号5','学生姓名5','upload/jiuyexinxi_touxiang5.jpg,upload/jiuyexinxi_touxiang6.jpg,upload/jiuyexinxi_touxiang7.jpg','性别5','手机号码5','专业5','就业企业5','就业岗位5','企业地址5','2023-01-24','备注5','2023-01-24 19:33:21',5),(96,'2023-01-24 11:33:21','学号6','学生姓名6','upload/jiuyexinxi_touxiang6.jpg,upload/jiuyexinxi_touxiang7.jpg,upload/jiuyexinxi_touxiang8.jpg','性别6','手机号码6','专业6','就业企业6','就业岗位6','企业地址6','2023-01-24','备注6','2023-01-24 19:33:21',6),(97,'2023-01-24 11:33:21','学号7','学生姓名7','upload/jiuyexinxi_touxiang7.jpg,upload/jiuyexinxi_touxiang8.jpg,upload/jiuyexinxi_touxiang9.jpg','性别7','手机号码7','专业7','就业企业7','就业岗位7','企业地址7','2023-01-24','备注7','2023-01-24 19:33:21',7),(98,'2023-01-24 11:33:21','学号8','学生姓名8','upload/jiuyexinxi_touxiang8.jpg,upload/jiuyexinxi_touxiang9.jpg,upload/jiuyexinxi_touxiang10.jpg','性别8','手机号码8','专业8','就业企业8','就业岗位8','企业地址8','2023-01-24','备注8','2023-01-24 19:33:21',8),(99,'2023-01-24 11:50:00','001','王强','upload/b5f006f3bb051ed2046f5b4a78a00843-1674560790307.jpeg','男','13823877777','计算机','江锥汽车','文员','环市北路','2023-01-25','','2023-01-24 11:48:34',19);
/*!40000 ALTER TABLE `jiuyexinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) NOT NULL COMMENT '标题',
  `introduction` longtext COMMENT '简介',
  `picture` longtext NOT NULL COMMENT '图片',
  `content` longtext NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8 COMMENT='新闻资讯';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (111,'2023-01-24 11:33:22','有梦想，就要努力去实现','不管你想要怎样的生活，你都要去努力争取，不多尝试一些事情怎么知道自己适合什么、不适合什么呢?你说你喜欢读书，让我给你列书单，你还问我哪里有那么多时间看书;你说自己梦想的职业是广告文案，问我如何成为一个文案，应该具备哪些素质;你说你计划晨跑，但总是因为学习、工作辛苦或者身体不舒服第二天起不了床;你说你一直梦想一个人去长途旅行，但是没钱，父母觉得危险。','upload/news_picture1.jpg','<p>不管你想要怎样的生活，你都要去努力争取，不多尝试一些事情怎么知道自己适合什么、不适合什么呢?</p><p>你说你喜欢读书，让我给你列书单，你还问我哪里有那么多时间看书;你说自己梦想的职业是广告文案，问我如何成为一个文案，应该具备哪些素质;你说你计划晨跑，但总是因为学习、工作辛苦或者身体不舒服第二天起不了床;你说你一直梦想一个人去长途旅行，但是没钱，父母觉得危险。其实，我已经厌倦了你这样说说而已的把戏，我觉得就算我告诉你如何去做，你也不会照做，因为你根本什么都不做。</p><p>真正有行动力的人不需要别人告诉他如何做，因为他已经在做了。就算碰到问题，他也会自己想办法，自己动手去解决或者主动寻求可以帮助他的人，而不是等着别人为自己解决问题。</p><p>首先要学习独立思考。花一点时间想一下自己喜欢什么，梦想是什么，不要别人说想环游世界，你就说你的梦想是环游世界。</p><p>很多人说现实束缚了自己，其实在这个世界上，我们一直都可以有很多选择，生活的决定权也—直都在自己手上，只是我们缺乏行动力而已。</p><p>如果你觉得安于现状是你想要的，那选择安于现状就会让你幸福和满足;如果你不甘平庸，选择一条改变、进取和奋斗的道路，在这个追求的过程中，你也一样会感到快乐。所谓的成功，即是按照自己想要的生活方式生活。最糟糕的状态，莫过于当你想要选择一条不甘平庸、改变、进取和奋斗的道路时，却以一种安于现状的方式生活，最后抱怨自己没有得到想要的人生。</p><p>因为喜欢，你不是在苦苦坚持，也因为喜欢，你愿意投入时间、精力，长久以往，获得成功就是自然而然的事情。</p>'),(112,'2023-01-24 11:33:22','又是一年毕业季','又是一年毕业季，感慨万千，还记的自己刚进学校那时候的情景，我拖着沉重的行李箱站在偌大的教学楼前面，感叹自己未来的日子即将在这个陌生的校园里度过，而如今斗转星移，浮光掠影，弹指之间，那些青葱岁月如同白驹过隙般悄然从指缝溜走。过去的种种在胸口交集纠结，像打翻的五味瓶，甜蜜，酸楚，苦涩，一并涌上心头。','upload/news_picture2.jpg','<p>又是一年毕业季，感慨万千，还记的自己刚进学校那时候的情景，我拖着沉重的行李箱站在偌大的教学楼前面，感叹自己未来的日子即将在这个陌生的校园里度过，而如今斗转星移，浮光掠影，弹指之间，那些青葱岁月如同白驹过隙般悄然从指缝溜走。</p><p>过去的种种在胸口交集纠结，像打翻的五味瓶，甜蜜，酸楚，苦涩，一并涌上心头。一直都是晚会的忠实参与者，无论是台前还是幕后，忽然间，角色转变，那种感觉确实难以用语言表达。</p><p>	过去的三年，总是默默地期盼着这个好雨时节，因为这时候，会有灿烂的阳光，会有满目的百花争艳，会有香甜的冰激凌，这是个毕业的季节，当时不经世事的我们会殷切地期待学校那一大堆的活动，期待穿上绚丽的演出服或者礼仪服，站在大礼堂镁光灯下尽情挥洒我们的澎拜的激情。</p><p>百感交集，隔岸观火与身临其境的感觉竟是如此不同。从来没想过一场晚会送走的是我们自己的时候会是怎样的感情，毕业就真的意味着结束吗?倔强的我们不愿意承认，谢谢学弟学妹们慷慨的将这次的主题定为“我们在这里”。我知道，这可能是他们对我们这些过来人的尊敬和施舍。</p><p>没有为这场晚会排练、奔波，没有为班级、学生会、文学院出点力，还真有点不习惯，百般无奈中，用“工作忙”个万能的借口来搪塞自己，欺骗别人。其实自己心里明白，那只是在逃避，只是不愿面对繁华落幕后的萧条和落寞。大四了，大家各奔东西，想凑齐班上的人真的是难上加难，敏燕从越南回来，刚落地就匆匆回了学校，那么恋家的人也启程回来了，睿睿学姐也是从家赶来跟我们团圆。大家—如既往的寒暄、打趣、调侃对方，似乎一切又回到了当初的单纯美好。</p><p>看着舞台上活泼可爱的学弟学妹们，如同一群机灵的小精灵，清澈的眼神，稚嫩的肢体，轻快地步伐，用他们那热情洋溢的舞姿渲染着在场的每一个人，我知道，我不应该羡慕嫉妒他们，不应该顾自怜惜逝去的青春，不应该感叹夕阳无限好，曾经，我们也拥有过，曾经，我们也年轻过，曾经，我们也灿烂过。我深深地告诉自己，人生的每个阶段都是美的，年轻有年轻的活力，成熟也有成熟的魅力。多—份稳重、淡然、优雅，也是漫漫时光掠影遗留下的.珍贵赏赐。</p>'),(113,'2023-01-24 11:33:22','挫折路上，坚持常在心间','回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。','upload/news_picture3.jpg','<p>回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?</p><p>清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。</p><p>是的，面对道途上那无情的嘲讽，面对步伐中那重复的摔跤，面对激流与硬石之间猛烈的碰撞，我们必须选择那富于阴雨，却最终见到彩虹的荆棘路。也许，经历了那暴风雨的洗礼，我们便会变得自信，幸福也随之而来。</p><p>司马迁屡遭羞辱，却依然在狱中撰写《史记》，作为一名史学家，不因王权而极度赞赏，也不因卑微而极度批判，然而他在坚持自己操守的同时，却依然要受统治阶级的阻碍，他似乎无权选择自己的本职。但是，他不顾于此，只是在面对道途的阻隔之时，他依然选择了走下去的信念。终于一部开山巨作《史记》诞生，为后人留下一份馈赠，也许在他完成毕生的杰作之时，他微微地笑了，没有什么比梦想实现更快乐的了......</p><p>	或许正如“长风破浪会有时，直挂云帆济沧海”一般，欣欣然地走向看似深渊的崎岖路，而在一番耕耘之后，便会发现这里另有一番天地。也许这就是困难与快乐的交融。</p><p>也许在形形色色的社会中，我们常能看到一份坚持，一份自信，但这里却还有一类人。这类人在暴风雨来临之际，只会闪躲，从未懂得这也是一种历炼，这何尝不是一份快乐。在阴暗的角落里，总是独自在哭，带着伤愁，看不到一点希望。</p><p>我们不能堕落于此，而要像海燕那般，在苍茫的大海上，高傲地飞翔，任何事物都无法阻挡，任何事都是幸福快乐的。</p>'),(114,'2023-01-24 11:33:22','挫折是另一个生命的开端','当遇到挫折或失败，你是看见失败还是看见机会?挫折是我们每个人成长的必经之路，它不是你想有就有，想没有就没有的。有句名言说的好，如果你想一生摆脱苦难，你就得是神或者是死尸。这句话形象地说明了挫折是伴随着人生的，是谁都逃不掉的。','upload/news_picture4.jpg','<p>当遇到挫折或失败，你是看见失败还是看见机会?</p><p>挫折是我们每个人成长的必经之路，它不是你想有就有，想没有就没有的。有句名言说的好，如果你想一生摆脱苦难，你就得是神或者是死尸。这句话形象地说明了挫折是伴随着人生的，是谁都逃不掉的。</p><p>人生在世，从古到今，不分天子平民，机遇虽有不同，但总不免有身陷困境或遭遇难题之处，这时候唯有通权达变，才能使人转危为安，甚至反败为胜。</p><p>大部分的人，一生当中，最痛苦的经验是失去所爱的人，其次是丢掉一份工作。其实，经得起考验的人，就算是被开除也不会惊慌，要学会面对。</p><p>	“塞翁失马，焉知非福。”人生的道路，并不是每一步都迈向成功，这就是追求的意义。我们还要认识到一点，挫折作为一种情绪状态和一种个人体验，各人的耐受性是大不相同的，有的人经历了一次次挫折，就能够坚忍不拔，百折不挠;有的人稍遇挫折便意志消沉，一蹶不振。所以，挫折感是一种主观感受，因为人的目的和需要不同，成功标准不同，所以同一种活动对于不同的人可能会造成不同的挫折感受。</p><p>凡事皆以平常心来看待，对于生命顺逆不要太执著。能够“破我执”是很高层的人生境界。</p><p>人事的艰难就是一种考验。就像—支剑要有磨刀来磨，剑才会利:一块璞玉要有粗石来磨，才会发出耀眼的光芒。我们能够做到的，只是如何减少、避免那些由于自身的原因所造成的挫折，而在遇到痛苦和挫折之后，则力求化解痛苦，争取幸福。我们要知道，痛苦和挫折是双重性的，它既是我们人生中难以完全避免的，也是我们在争取成功时，不可缺少的一种动力。因为我认为，推动我们奋斗的力量，不仅仅是对成功的渴望，还有为摆脱痛苦和挫折而进行的奋斗。</p>'),(115,'2023-01-24 11:33:22','你要去相信，没有到不了的明天','有梦想就去努力，因为在这一辈子里面，现在不去勇敢的努力，也许就再也没有机会了。你要去相信，一定要相信，没有到不了的明天。不要被命运打败，让自己变得更强大。不管你现在是一个人走在异乡的街道上始终没有找到一丝归属感，还是你在跟朋友们一起吃饭开心址笑着的时候闪过一丝落寞。','upload/news_picture5.jpg','<p>有梦想就去努力，因为在这一辈子里面，现在不去勇敢的努力，也许就再也没有机会了。你要去相信，一定要相信，没有到不了的明天。不要被命运打败，让自己变得更强大。</p><p>不管你现在是一个人走在异乡的街道上始终没有找到一丝归属感，还是你在跟朋友们一起吃饭开心址笑着的时候闪过一丝落寞。</p><p>	不管你现在是在图书馆里背着怎么也看不进去的英语单词，还是你现在迷茫地看不清未来的方向不知道要往哪走。</p><p>不管你现在是在努力着去实现梦想却没能拉近与梦想的距离，还是你已经慢慢地找不到自己的梦想了。</p><p>你都要去相信，没有到不了的明天。</p><p>	有的时候你的梦想太大，别人说你的梦想根本不可能实现;有的时候你的梦想又太小，又有人说你胸无大志;有的时候你对死党说着将来要去环游世界的梦想，却换来他的不屑一顾，于是你再也不提自己的梦想;有的时候你突然说起将来要开个小店的愿望，却发现你讲述的那个人，并没有听到你在说什么。</p><p>不过又能怎么样呢，未来始终是自己的，梦想始终是自己的，没有人会来帮你实现它。</p><p>也许很多时候我们只是需要朋友的一句鼓励，一句安慰，却也得不到。但是相信我，世界上还有很多人，只是想要和你说说话。</p><p>因为我们都一样。一样的被人说成固执，一样的在追逐他们眼里根本不在意的东西。</p><p>所以，又有什么关系呢，别人始终不是你、不能懂你的心情，你又何必多去解释呢。这个世界会来阻止你，困难也会接踵而至，其实真正关键的只有自己，有没有那个倔强。</p><p>这个世界上没有不带伤的人，真正能治愈自己的，只有自己。</p>'),(116,'2023-01-24 11:33:22','离开是一种痛苦，是一种勇气，但同样也是一个考验，是一个新的开端','无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。','upload/news_picture6.jpg','<p>无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。离别的确是一种痛苦，但同样也是我们走入社会，走向新环境、新领域的一个开端，希望大家在以后新的工作岗位上能够确定自己的新起点，坚持不懈，向着更新、更高的目标前进，因为人生最美好的东西永远都在最前方!</p><p>忆往昔峥嵘岁月，看今朝潮起潮落，望未来任重而道远。作为新时代的我们，就应在失败时，能拼搏奋起，去谱写人生的辉煌。在成功时，亦能居安思危，不沉湎于一时的荣耀、鲜花和掌声中，时时刻刻怀着一颗积极寻找自己新的奶酪的心，处变不惊、成败不渝，始终踏着自己坚实的步伐，从零开始，不断向前迈进，这样才能在这风起云涌、变幻莫测的社会大潮中成为真正的弄潮儿!</p>'),(117,'2023-01-24 11:33:22','Leave未必是一种痛苦','无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。','upload/news_picture7.jpg','<p>无穷无尽是离愁，天涯海角遍寻思。当离别在即之时，当面对着相濡以沫兄弟般的朋友时，当面对着经历了四年的磨合而形成的真挚友谊之时，我内心激动无语，说一声再见，道一声珍重都很难出口。回想自己四年大学的风风雨雨，回想我们曾经共同经历的岁月流年，我感谢大家的相扶相依，感谢朋友们的莫大支持与帮助。虽然舍不得，但离别的脚步却不因我们的挚情而停滞。离别的确是一种痛苦，但同样也是我们走入社会，走向新环境、新领域的一个开端，希望大家在以后新的工作岗位上能够确定自己的新起点，坚持不懈，向着更新、更高的目标前进，因为人生最美好的东西永远都在最前方!</p><p>忆往昔峥嵘岁月，看今朝潮起潮落，望未来任重而道远。作为新时代的我们，就应在失败时，能拼搏奋起，去谱写人生的辉煌。在成功时，亦能居安思危，不沉湎于一时的荣耀、鲜花和掌声中，时时刻刻怀着一颗积极寻找自己新的奶酪的心，处变不惊、成败不渝，始终踏着自己坚实的步伐，从零开始，不断向前迈进，这样才能在这风起云涌、变幻莫测的社会大潮中成为真正的弄潮儿!</p>'),(118,'2023-01-24 11:33:22','坚持才会成功','回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。','upload/news_picture8.jpg','<p>回头看看，你会不会发现，曾经的你在这里摔倒过;回头看看，你是否发现，一次次地重复着，却从没爬起过。而如今，让我们把视线转向前方，那一道道金色的弧线，是流星飞逝的痕迹，或是成功运行的轨道。今天的你，是否要扬帆起航，让幸福来敲门?</p><p>清晨的太阳撒向大地，神奇的宇宙赋予它神奇的色彩，大自然沐浴着春光，世界因太阳的照射而精彩，林中百鸟啾啾，河水轻轻流淌，汇成清宁的山间小调。</p><p>是的，面对道途上那无情的嘲讽，面对步伐中那重复的摔跤，面对激流与硬石之间猛烈的碰撞，我们必须选择那富于阴雨，却最终见到彩虹的荆棘路。也许，经历了那暴风雨的洗礼，我们便会变得自信，幸福也随之而来。</p><p>司马迁屡遭羞辱，却依然在狱中撰写《史记》，作为一名史学家，不因王权而极度赞赏，也不因卑微而极度批判，然而他在坚持自己操守的同时，却依然要受统治阶级的阻碍，他似乎无权选择自己的本职。但是，他不顾于此，只是在面对道途的阻隔之时，他依然选择了走下去的信念。终于一部开山巨作《史记》诞生，为后人留下一份馈赠，也许在他完成毕生的杰作之时，他微微地笑了，没有什么比梦想实现更快乐的了......</p><p>	或许正如“长风破浪会有时，直挂云帆济沧海”一般，欣欣然地走向看似深渊的崎岖路，而在一番耕耘之后，便会发现这里另有一番天地。也许这就是困难与快乐的交融。</p><p>也许在形形色色的社会中，我们常能看到一份坚持，一份自信，但这里却还有一类人。这类人在暴风雨来临之际，只会闪躲，从未懂得这也是一种历炼，这何尝不是一份快乐。在阴暗的角落里，总是独自在哭，带着伤愁，看不到一点希望。</p><p>我们不能堕落于此，而要像海燕那般，在苍茫的大海上，高傲地飞翔，任何事物都无法阻挡，任何事都是幸福快乐的。</p>'),(119,'2023-01-24 11:40:22','就业指导','就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容','upload/风景 (3)-1674560403366.jpeg','<p>输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容</p>');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qiuzhijianli`
--

DROP TABLE IF EXISTS `qiuzhijianli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qiuzhijianli` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `touxiang` longtext COMMENT '头像',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `nianling` varchar(200) DEFAULT NULL COMMENT '年龄',
  `zhuanye` varchar(200) NOT NULL COMMENT '专业',
  `xueli` varchar(200) NOT NULL COMMENT '学历',
  `biyeyuanxiao` varchar(200) NOT NULL COMMENT '毕业院校',
  `waiyushuiping` varchar(200) NOT NULL COMMENT '外语水平',
  `qiuzhiyixiang` varchar(200) NOT NULL COMMENT '求职意向',
  `qiwangxinzi` varchar(200) NOT NULL COMMENT '期望薪资',
  `shehuishijian` longtext COMMENT '社会实践',
  `gerenjianjie` longtext COMMENT '个人简介',
  `userid` bigint(20) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8 COMMENT='求职简历';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qiuzhijianli`
--

LOCK TABLES `qiuzhijianli` WRITE;
/*!40000 ALTER TABLE `qiuzhijianli` DISABLE KEYS */;
INSERT INTO `qiuzhijianli` VALUES (81,'2023-01-24 11:33:21','学号1','学生姓名1','upload/qiuzhijianli_touxiang1.jpg,upload/qiuzhijianli_touxiang2.jpg,upload/qiuzhijianli_touxiang3.jpg','性别1','年龄1','专业1','学历1','毕业院校1','外语水平1','求职意向1','期望薪资1','社会实践1','个人简介1',1),(82,'2023-01-24 11:33:21','学号2','学生姓名2','upload/qiuzhijianli_touxiang2.jpg,upload/qiuzhijianli_touxiang3.jpg,upload/qiuzhijianli_touxiang4.jpg','性别2','年龄2','专业2','学历2','毕业院校2','外语水平2','求职意向2','期望薪资2','社会实践2','个人简介2',2),(83,'2023-01-24 11:33:21','学号3','学生姓名3','upload/qiuzhijianli_touxiang3.jpg,upload/qiuzhijianli_touxiang4.jpg,upload/qiuzhijianli_touxiang5.jpg','性别3','年龄3','专业3','学历3','毕业院校3','外语水平3','求职意向3','期望薪资3','社会实践3','个人简介3',3),(84,'2023-01-24 11:33:21','学号4','学生姓名4','upload/qiuzhijianli_touxiang4.jpg,upload/qiuzhijianli_touxiang5.jpg,upload/qiuzhijianli_touxiang6.jpg','性别4','年龄4','专业4','学历4','毕业院校4','外语水平4','求职意向4','期望薪资4','社会实践4','个人简介4',4),(85,'2023-01-24 11:33:21','学号5','学生姓名5','upload/qiuzhijianli_touxiang5.jpg,upload/qiuzhijianli_touxiang6.jpg,upload/qiuzhijianli_touxiang7.jpg','性别5','年龄5','专业5','学历5','毕业院校5','外语水平5','求职意向5','期望薪资5','社会实践5','个人简介5',5),(86,'2023-01-24 11:33:21','学号6','学生姓名6','upload/qiuzhijianli_touxiang6.jpg,upload/qiuzhijianli_touxiang7.jpg,upload/qiuzhijianli_touxiang8.jpg','性别6','年龄6','专业6','学历6','毕业院校6','外语水平6','求职意向6','期望薪资6','社会实践6','个人简介6',6),(87,'2023-01-24 11:33:21','学号7','学生姓名7','upload/qiuzhijianli_touxiang7.jpg,upload/qiuzhijianli_touxiang8.jpg,upload/qiuzhijianli_touxiang9.jpg','性别7','年龄7','专业7','学历7','毕业院校7','外语水平7','求职意向7','期望薪资7','社会实践7','个人简介7',7),(88,'2023-01-24 11:33:21','学号8','学生姓名8','upload/qiuzhijianli_touxiang8.jpg,upload/qiuzhijianli_touxiang9.jpg,upload/qiuzhijianli_touxiang10.jpg','性别8','年龄8','专业8','学历8','毕业院校8','外语水平8','求职意向8','期望薪资8','社会实践8','个人简介8',8),(89,'2023-01-24 11:49:31','001','王强','upload/b5f006f3bb051ed2046f5b4a78a00843-1674560790307.jpeg','男','25','计算机','大专','科技学院','四级','文职','5000以上','无','',19);
/*!40000 ALTER TABLE `qiuzhijianli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qiye`
--

DROP TABLE IF EXISTS `qiye`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qiye` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `qiyezhanghao` varchar(200) NOT NULL COMMENT '企业账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `qiyemingcheng` varchar(200) NOT NULL COMMENT '企业名称',
  `tupian` longtext COMMENT '图片',
  `lianxiren` varchar(200) DEFAULT NULL COMMENT '联系人',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `qiyeyouxiang` varchar(200) DEFAULT NULL COMMENT '企业邮箱',
  `qiyedizhi` varchar(200) DEFAULT NULL COMMENT '企业地址',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  PRIMARY KEY (`id`),
  UNIQUE KEY `qiyezhanghao` (`qiyezhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COMMENT='企业';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qiye`
--

LOCK TABLES `qiye` WRITE;
/*!40000 ALTER TABLE `qiye` DISABLE KEYS */;
INSERT INTO `qiye` VALUES (21,'2023-01-24 11:33:21','企业账号1','123456','企业名称1','upload/qiye_tupian1.jpg','联系人1','13823888881','773890001@qq.com','企业地址1','是',''),(22,'2023-01-24 11:33:21','企业账号2','123456','企业名称2','upload/qiye_tupian2.jpg','联系人2','13823888882','773890002@qq.com','企业地址2','是',''),(23,'2023-01-24 11:33:21','企业账号3','123456','企业名称3','upload/qiye_tupian3.jpg','联系人3','13823888883','773890003@qq.com','企业地址3','是',''),(24,'2023-01-24 11:33:21','企业账号4','123456','企业名称4','upload/qiye_tupian4.jpg','联系人4','13823888884','773890004@qq.com','企业地址4','是',''),(25,'2023-01-24 11:33:21','企业账号5','123456','企业名称5','upload/qiye_tupian5.jpg','联系人5','13823888885','773890005@qq.com','企业地址5','是',''),(26,'2023-01-24 11:33:21','企业账号6','123456','企业名称6','upload/qiye_tupian6.jpg','联系人6','13823888886','773890006@qq.com','企业地址6','是',''),(27,'2023-01-24 11:33:21','企业账号7','123456','企业名称7','upload/qiye_tupian7.jpg','联系人7','13823888887','773890007@qq.com','企业地址7','是',''),(28,'2023-01-24 11:33:21','企业账号8','123456','企业名称8','upload/qiye_tupian8.jpg','联系人8','13823888888','773890008@qq.com','企业地址8','是',''),(29,'2023-01-24 11:37:36','11','123456','江锥汽车','upload/企业 (2)-1674560477159.jpeg','陈先生','13823888888','','环市北路5号','是','同意注册');
/*!40000 ALTER TABLE `qiye` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storeup`
--

DROP TABLE IF EXISTS `storeup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storeup` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) DEFAULT NULL COMMENT '商品id',
  `tablename` varchar(200) DEFAULT NULL COMMENT '表名',
  `name` varchar(200) NOT NULL COMMENT '名称',
  `picture` longtext NOT NULL COMMENT '图片',
  `type` varchar(200) DEFAULT '1' COMMENT '类型(1:收藏,21:赞,22:踩,31:竞拍参与,41:关注)',
  `inteltype` varchar(200) DEFAULT NULL COMMENT '推荐类型',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='收藏表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeup`
--

LOCK TABLES `storeup` WRITE;
/*!40000 ALTER TABLE `storeup` DISABLE KEYS */;
INSERT INTO `storeup` VALUES (1,'2023-01-24 11:47:27',19,49,'zhaopinxinxi','文员客服招聘','upload/企业-1674560509634.jpeg','1','文职','');
/*!40000 ALTER TABLE `storeup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','管理员','2023-01-24 11:33:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xuanjianghui`
--

DROP TABLE IF EXISTS `xuanjianghui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xuanjianghui` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `biaoti` varchar(200) NOT NULL COMMENT '标题',
  `fengmian` longtext COMMENT '封面',
  `zhaopinzhiwei` varchar(200) NOT NULL COMMENT '招聘职位',
  `zhaopinrenshu` varchar(200) DEFAULT NULL COMMENT '招聘人数',
  `jubandidian` varchar(200) NOT NULL COMMENT '举办地点',
  `jubanshijian` datetime NOT NULL COMMENT '举办时间',
  `xuanjianghuixiangqing` longtext COMMENT '宣讲会详情',
  `qiyezhanghao` varchar(200) DEFAULT NULL COMMENT '企业账号',
  `qiyemingcheng` varchar(200) DEFAULT NULL COMMENT '企业名称',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8 COMMENT='宣讲会';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xuanjianghui`
--

LOCK TABLES `xuanjianghui` WRITE;
/*!40000 ALTER TABLE `xuanjianghui` DISABLE KEYS */;
INSERT INTO `xuanjianghui` VALUES (61,'2023-01-24 11:33:21','标题1','upload/xuanjianghui_fengmian1.jpg,upload/xuanjianghui_fengmian2.jpg,upload/xuanjianghui_fengmian3.jpg','招聘职位1','招聘人数1','举办地点1','2023-01-24 19:33:21','宣讲会详情1','企业账号1','企业名称1','联系电话1'),(62,'2023-01-24 11:33:21','标题2','upload/xuanjianghui_fengmian2.jpg,upload/xuanjianghui_fengmian3.jpg,upload/xuanjianghui_fengmian4.jpg','招聘职位2','招聘人数2','举办地点2','2023-01-24 19:33:21','宣讲会详情2','企业账号2','企业名称2','联系电话2'),(63,'2023-01-24 11:33:21','标题3','upload/xuanjianghui_fengmian3.jpg,upload/xuanjianghui_fengmian4.jpg,upload/xuanjianghui_fengmian5.jpg','招聘职位3','招聘人数3','举办地点3','2023-01-24 19:33:21','宣讲会详情3','企业账号3','企业名称3','联系电话3'),(64,'2023-01-24 11:33:21','标题4','upload/xuanjianghui_fengmian4.jpg,upload/xuanjianghui_fengmian5.jpg,upload/xuanjianghui_fengmian6.jpg','招聘职位4','招聘人数4','举办地点4','2023-01-24 19:33:21','宣讲会详情4','企业账号4','企业名称4','联系电话4'),(65,'2023-01-24 11:33:21','标题5','upload/xuanjianghui_fengmian5.jpg,upload/xuanjianghui_fengmian6.jpg,upload/xuanjianghui_fengmian7.jpg','招聘职位5','招聘人数5','举办地点5','2023-01-24 19:33:21','宣讲会详情5','企业账号5','企业名称5','联系电话5'),(66,'2023-01-24 11:33:21','标题6','upload/xuanjianghui_fengmian6.jpg,upload/xuanjianghui_fengmian7.jpg,upload/xuanjianghui_fengmian8.jpg','招聘职位6','招聘人数6','举办地点6','2023-01-24 19:33:21','宣讲会详情6','企业账号6','企业名称6','联系电话6'),(67,'2023-01-24 11:33:21','标题7','upload/xuanjianghui_fengmian7.jpg,upload/xuanjianghui_fengmian8.jpg,upload/xuanjianghui_fengmian9.jpg','招聘职位7','招聘人数7','举办地点7','2023-01-24 19:33:21','宣讲会详情7','企业账号7','企业名称7','联系电话7'),(68,'2023-01-24 11:33:21','标题8','upload/xuanjianghui_fengmian8.jpg,upload/xuanjianghui_fengmian9.jpg,upload/xuanjianghui_fengmian10.jpg','招聘职位8','招聘人数8','举办地点8','2023-01-24 19:33:21','宣讲会详情8','企业账号8','企业名称8','联系电话8'),(69,'2023-01-24 11:43:19','企业招聘宣讲会','upload/企业 (3)-1674560576868.jpeg','文职','2人','学校305教室','2023-01-26 01:00:00','<p>就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容</p>','11','江锥汽车','13823888888');
/*!40000 ALTER TABLE `xuanjianghui` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xuanjianghuibaoming`
--

DROP TABLE IF EXISTS `xuanjianghuibaoming`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xuanjianghuibaoming` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `biaoti` varchar(200) DEFAULT NULL COMMENT '标题',
  `fengmian` longtext COMMENT '封面',
  `jubanhuichang` varchar(200) DEFAULT NULL COMMENT '举办会场',
  `jubanshijian` varchar(200) DEFAULT NULL COMMENT '举办时间',
  `qiyezhanghao` varchar(200) DEFAULT NULL COMMENT '企业账号',
  `qiyemingcheng` varchar(200) DEFAULT NULL COMMENT '企业名称',
  `baomingshijian` datetime DEFAULT NULL COMMENT '报名时间',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `shoujihaoma` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `crossuserid` bigint(20) DEFAULT NULL COMMENT '跨表用户id',
  `crossrefid` bigint(20) DEFAULT NULL COMMENT '跨表主键id',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `userid` bigint(20) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8 COMMENT='宣讲会报名';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xuanjianghuibaoming`
--

LOCK TABLES `xuanjianghuibaoming` WRITE;
/*!40000 ALTER TABLE `xuanjianghuibaoming` DISABLE KEYS */;
INSERT INTO `xuanjianghuibaoming` VALUES (71,'2023-01-24 11:33:21','标题1','upload/xuanjianghuibaoming_fengmian1.jpg,upload/xuanjianghuibaoming_fengmian2.jpg,upload/xuanjianghuibaoming_fengmian3.jpg','举办会场1','举办时间1','企业账号1','企业名称1','2023-01-24 19:33:21','学号1','学生姓名1','手机号码1',1,1,'是','',1),(72,'2023-01-24 11:33:21','标题2','upload/xuanjianghuibaoming_fengmian2.jpg,upload/xuanjianghuibaoming_fengmian3.jpg,upload/xuanjianghuibaoming_fengmian4.jpg','举办会场2','举办时间2','企业账号2','企业名称2','2023-01-24 19:33:21','学号2','学生姓名2','手机号码2',2,2,'是','',2),(73,'2023-01-24 11:33:21','标题3','upload/xuanjianghuibaoming_fengmian3.jpg,upload/xuanjianghuibaoming_fengmian4.jpg,upload/xuanjianghuibaoming_fengmian5.jpg','举办会场3','举办时间3','企业账号3','企业名称3','2023-01-24 19:33:21','学号3','学生姓名3','手机号码3',3,3,'是','',3),(74,'2023-01-24 11:33:21','标题4','upload/xuanjianghuibaoming_fengmian4.jpg,upload/xuanjianghuibaoming_fengmian5.jpg,upload/xuanjianghuibaoming_fengmian6.jpg','举办会场4','举办时间4','企业账号4','企业名称4','2023-01-24 19:33:21','学号4','学生姓名4','手机号码4',4,4,'是','',4),(75,'2023-01-24 11:33:21','标题5','upload/xuanjianghuibaoming_fengmian5.jpg,upload/xuanjianghuibaoming_fengmian6.jpg,upload/xuanjianghuibaoming_fengmian7.jpg','举办会场5','举办时间5','企业账号5','企业名称5','2023-01-24 19:33:21','学号5','学生姓名5','手机号码5',5,5,'是','',5),(76,'2023-01-24 11:33:21','标题6','upload/xuanjianghuibaoming_fengmian6.jpg,upload/xuanjianghuibaoming_fengmian7.jpg,upload/xuanjianghuibaoming_fengmian8.jpg','举办会场6','举办时间6','企业账号6','企业名称6','2023-01-24 19:33:21','学号6','学生姓名6','手机号码6',6,6,'是','',6),(77,'2023-01-24 11:33:21','标题7','upload/xuanjianghuibaoming_fengmian7.jpg,upload/xuanjianghuibaoming_fengmian8.jpg,upload/xuanjianghuibaoming_fengmian9.jpg','举办会场7','举办时间7','企业账号7','企业名称7','2023-01-24 19:33:21','学号7','学生姓名7','手机号码7',7,7,'是','',7),(78,'2023-01-24 11:33:21','标题8','upload/xuanjianghuibaoming_fengmian8.jpg,upload/xuanjianghuibaoming_fengmian9.jpg,upload/xuanjianghuibaoming_fengmian10.jpg','举办会场8','举办时间8','企业账号8','企业名称8','2023-01-24 19:33:21','学号8','学生姓名8','手机号码8',8,8,'是','',8),(79,'2023-01-24 11:48:07','企业招聘宣讲会','upload/企业 (3)-1674560576868.jpeg','','2023-01-26 09:00:00','11','江锥汽车','2023-01-24 11:47:01','001','王强','13823877777',19,69,'','',19);
/*!40000 ALTER TABLE `xuanjianghuibaoming` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xuesheng`
--

DROP TABLE IF EXISTS `xuesheng`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xuesheng` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xuehao` varchar(200) NOT NULL COMMENT '学号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xueshengxingming` varchar(200) NOT NULL COMMENT '学生姓名',
  `touxiang` longtext COMMENT '头像',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `shoujihaoma` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `youxiang` varchar(200) DEFAULT NULL COMMENT '邮箱',
  PRIMARY KEY (`id`),
  UNIQUE KEY `xuehao` (`xuehao`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COMMENT='学生';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xuesheng`
--

LOCK TABLES `xuesheng` WRITE;
/*!40000 ALTER TABLE `xuesheng` DISABLE KEYS */;
INSERT INTO `xuesheng` VALUES (11,'2023-01-24 11:33:21','学号1','123456','学生姓名1','upload/xuesheng_touxiang1.jpg','男','13823888881','773890001@qq.com'),(12,'2023-01-24 11:33:21','学号2','123456','学生姓名2','upload/xuesheng_touxiang2.jpg','男','13823888882','773890002@qq.com'),(13,'2023-01-24 11:33:21','学号3','123456','学生姓名3','upload/xuesheng_touxiang3.jpg','男','13823888883','773890003@qq.com'),(14,'2023-01-24 11:33:21','学号4','123456','学生姓名4','upload/xuesheng_touxiang4.jpg','男','13823888884','773890004@qq.com'),(15,'2023-01-24 11:33:21','学号5','123456','学生姓名5','upload/xuesheng_touxiang5.jpg','男','13823888885','773890005@qq.com'),(16,'2023-01-24 11:33:21','学号6','123456','学生姓名6','upload/xuesheng_touxiang6.jpg','男','13823888886','773890006@qq.com'),(17,'2023-01-24 11:33:21','学号7','123456','学生姓名7','upload/xuesheng_touxiang7.jpg','男','13823888887','773890007@qq.com'),(18,'2023-01-24 11:33:21','学号8','123456','学生姓名8','upload/xuesheng_touxiang8.jpg','男','13823888888','773890008@qq.com'),(19,'2023-01-24 11:46:10','001','123456','王强','upload/b5f006f3bb051ed2046f5b4a78a00843-1674560790307.jpeg','男','13823877777','');
/*!40000 ALTER TABLE `xuesheng` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yingpinxinxi`
--

DROP TABLE IF EXISTS `yingpinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yingpinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gangweimingcheng` varchar(200) DEFAULT NULL COMMENT '岗位名称',
  `tupian` longtext COMMENT '图片',
  `zhiweileibie` varchar(200) DEFAULT NULL COMMENT '职位类别',
  `gongzidaiyu` varchar(200) DEFAULT NULL COMMENT '工资待遇',
  `shangbanshijian` varchar(200) DEFAULT NULL COMMENT '上班时间',
  `nianlingyaoqiu` varchar(200) DEFAULT NULL COMMENT '年龄要求',
  `xueliyaoqiu` varchar(200) DEFAULT NULL COMMENT '学历要求',
  `qiyezhanghao` varchar(200) DEFAULT NULL COMMENT '企业账号',
  `qiyemingcheng` varchar(200) DEFAULT NULL COMMENT '企业名称',
  `gerenjianli` longtext NOT NULL COMMENT '个人简历',
  `qiuzhishijian` datetime DEFAULT NULL COMMENT '求职时间',
  `beizhu` varchar(200) DEFAULT NULL COMMENT '备注',
  `xuehao` varchar(200) DEFAULT NULL COMMENT '学号',
  `xueshengxingming` varchar(200) DEFAULT NULL COMMENT '学生姓名',
  `shoujihaoma` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `crossuserid` bigint(20) DEFAULT NULL COMMENT '跨表用户id',
  `crossrefid` bigint(20) DEFAULT NULL COMMENT '跨表主键id',
  `sfsh` varchar(200) DEFAULT '待审核' COMMENT '是否审核',
  `shhf` longtext COMMENT '审核回复',
  `userid` bigint(20) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8 COMMENT='应聘信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yingpinxinxi`
--

LOCK TABLES `yingpinxinxi` WRITE;
/*!40000 ALTER TABLE `yingpinxinxi` DISABLE KEYS */;
INSERT INTO `yingpinxinxi` VALUES (51,'2023-01-24 11:33:21','岗位名称1','upload/yingpinxinxi_tupian1.jpg,upload/yingpinxinxi_tupian2.jpg,upload/yingpinxinxi_tupian3.jpg','职位类别1','工资待遇1','上班时间1','年龄要求1','学历要求1','企业账号1','企业名称1','个人简历1','2023-01-24 19:33:21','备注1','学号1','学生姓名1','手机号码1',1,1,'是','请于2月1号上午来公司面试',1),(52,'2023-01-24 11:33:21','岗位名称2','upload/yingpinxinxi_tupian2.jpg,upload/yingpinxinxi_tupian3.jpg,upload/yingpinxinxi_tupian4.jpg','职位类别2','工资待遇2','上班时间2','年龄要求2','学历要求2','企业账号2','企业名称2','个人简历2','2023-01-24 19:33:21','备注2','学号2','学生姓名2','手机号码2',2,2,'是','',2),(53,'2023-01-24 11:33:21','岗位名称3','upload/yingpinxinxi_tupian3.jpg,upload/yingpinxinxi_tupian4.jpg,upload/yingpinxinxi_tupian5.jpg','职位类别3','工资待遇3','上班时间3','年龄要求3','学历要求3','企业账号3','企业名称3','个人简历3','2023-01-24 19:33:21','备注3','学号3','学生姓名3','手机号码3',3,3,'是','',3),(54,'2023-01-24 11:33:21','岗位名称4','upload/yingpinxinxi_tupian4.jpg,upload/yingpinxinxi_tupian5.jpg,upload/yingpinxinxi_tupian6.jpg','职位类别4','工资待遇4','上班时间4','年龄要求4','学历要求4','企业账号4','企业名称4','个人简历4','2023-01-24 19:33:21','备注4','学号4','学生姓名4','手机号码4',4,4,'是','',4),(55,'2023-01-24 11:33:21','岗位名称5','upload/yingpinxinxi_tupian5.jpg,upload/yingpinxinxi_tupian6.jpg,upload/yingpinxinxi_tupian7.jpg','职位类别5','工资待遇5','上班时间5','年龄要求5','学历要求5','企业账号5','企业名称5','个人简历5','2023-01-24 19:33:21','备注5','学号5','学生姓名5','手机号码5',5,5,'是','',5),(56,'2023-01-24 11:33:21','岗位名称6','upload/yingpinxinxi_tupian6.jpg,upload/yingpinxinxi_tupian7.jpg,upload/yingpinxinxi_tupian8.jpg','职位类别6','工资待遇6','上班时间6','年龄要求6','学历要求6','企业账号6','企业名称6','个人简历6','2023-01-24 19:33:21','备注6','学号6','学生姓名6','手机号码6',6,6,'是','',6),(57,'2023-01-24 11:33:21','岗位名称7','upload/yingpinxinxi_tupian7.jpg,upload/yingpinxinxi_tupian8.jpg,upload/yingpinxinxi_tupian9.jpg','职位类别7','工资待遇7','上班时间7','年龄要求7','学历要求7','企业账号7','企业名称7','个人简历7','2023-01-24 19:33:21','备注7','学号7','学生姓名7','手机号码7',7,7,'是','',7),(58,'2023-01-24 11:33:21','岗位名称8','upload/yingpinxinxi_tupian8.jpg,upload/yingpinxinxi_tupian9.jpg,upload/yingpinxinxi_tupian10.jpg','职位类别8','工资待遇8','上班时间8','年龄要求8','学历要求8','企业账号8','企业名称8','个人简历8','2023-01-24 19:33:21','备注8','学号8','学生姓名8','手机号码8',8,8,'是','',8),(59,'2023-01-24 11:47:42','文员客服招聘','upload/企业-1674560509634.jpeg','文职','4500-6000','8:00-17:00','25-40','大专以上','11','江锥汽车','<p>输入个人简历内容</p>','2023-01-24 11:46:29','','001','王强','13823877777',19,49,'','',19);
/*!40000 ALTER TABLE `yingpinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhaopinxinxi`
--

DROP TABLE IF EXISTS `zhaopinxinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhaopinxinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gangweimingcheng` varchar(200) NOT NULL COMMENT '岗位名称',
  `tupian` longtext COMMENT '图片',
  `zhiweileibie` varchar(200) NOT NULL COMMENT '职位类别',
  `zhaopinrenshu` varchar(200) NOT NULL COMMENT '招聘人数',
  `gongzidaiyu` varchar(200) NOT NULL COMMENT '工资待遇',
  `shangbanshijian` varchar(200) NOT NULL COMMENT '上班时间',
  `xueliyaoqiu` varchar(200) DEFAULT NULL COMMENT '学历要求',
  `nianlingyaoqiu` varchar(200) DEFAULT NULL COMMENT '年龄要求',
  `gongzuoxiangqing` longtext COMMENT '工作详情',
  `fabushijian` date DEFAULT NULL COMMENT '发布时间',
  `qiyezhanghao` varchar(200) DEFAULT NULL COMMENT '企业账号',
  `qiyemingcheng` varchar(200) DEFAULT NULL COMMENT '企业名称',
  `lianxiren` varchar(200) DEFAULT NULL COMMENT '联系人',
  `lianxidianhua` varchar(200) DEFAULT NULL COMMENT '联系电话',
  `qiyedizhi` varchar(200) DEFAULT NULL COMMENT '企业地址',
  `clicktime` datetime DEFAULT NULL COMMENT '最近点击时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COMMENT='招聘信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhaopinxinxi`
--

LOCK TABLES `zhaopinxinxi` WRITE;
/*!40000 ALTER TABLE `zhaopinxinxi` DISABLE KEYS */;
INSERT INTO `zhaopinxinxi` VALUES (41,'2023-01-24 11:33:21','岗位名称1','upload/zhaopinxinxi_tupian1.jpg,upload/zhaopinxinxi_tupian2.jpg,upload/zhaopinxinxi_tupian3.jpg','职位类别1','招聘人数1','工资待遇1','上班时间1','学历要求1','年龄要求1','工作详情1','2023-01-24','企业账号1','企业名称1','联系人1','联系电话1','企业地址1','2023-01-24 19:33:21'),(42,'2023-01-24 11:33:21','岗位名称2','upload/zhaopinxinxi_tupian2.jpg,upload/zhaopinxinxi_tupian3.jpg,upload/zhaopinxinxi_tupian4.jpg','职位类别2','招聘人数2','工资待遇2','上班时间2','学历要求2','年龄要求2','工作详情2','2023-01-24','企业账号2','企业名称2','联系人2','联系电话2','企业地址2','2023-01-24 19:33:21'),(43,'2023-01-24 11:33:21','岗位名称3','upload/zhaopinxinxi_tupian3.jpg,upload/zhaopinxinxi_tupian4.jpg,upload/zhaopinxinxi_tupian5.jpg','职位类别3','招聘人数3','工资待遇3','上班时间3','学历要求3','年龄要求3','工作详情3','2023-01-24','企业账号3','企业名称3','联系人3','联系电话3','企业地址3','2023-01-24 19:33:21'),(44,'2023-01-24 11:33:21','岗位名称4','upload/zhaopinxinxi_tupian4.jpg,upload/zhaopinxinxi_tupian5.jpg,upload/zhaopinxinxi_tupian6.jpg','职位类别4','招聘人数4','工资待遇4','上班时间4','学历要求4','年龄要求4','工作详情4','2023-01-24','企业账号4','企业名称4','联系人4','联系电话4','企业地址4','2023-01-24 19:33:21'),(45,'2023-01-24 11:33:21','岗位名称5','upload/zhaopinxinxi_tupian5.jpg,upload/zhaopinxinxi_tupian6.jpg,upload/zhaopinxinxi_tupian7.jpg','职位类别5','招聘人数5','工资待遇5','上班时间5','学历要求5','年龄要求5','工作详情5','2023-01-24','企业账号5','企业名称5','联系人5','联系电话5','企业地址5','2023-01-24 19:33:21'),(46,'2023-01-24 11:33:21','岗位名称6','upload/zhaopinxinxi_tupian6.jpg,upload/zhaopinxinxi_tupian7.jpg,upload/zhaopinxinxi_tupian8.jpg','职位类别6','招聘人数6','工资待遇6','上班时间6','学历要求6','年龄要求6','工作详情6','2023-01-24','企业账号6','企业名称6','联系人6','联系电话6','企业地址6','2023-01-24 19:33:21'),(47,'2023-01-24 11:33:21','岗位名称7','upload/zhaopinxinxi_tupian7.jpg,upload/zhaopinxinxi_tupian8.jpg,upload/zhaopinxinxi_tupian9.jpg','职位类别7','招聘人数7','工资待遇7','上班时间7','学历要求7','年龄要求7','工作详情7','2023-01-24','企业账号7','企业名称7','联系人7','联系电话7','企业地址7','2023-01-24 19:33:21'),(48,'2023-01-24 11:33:21','岗位名称8','upload/zhaopinxinxi_tupian8.jpg,upload/zhaopinxinxi_tupian9.jpg,upload/zhaopinxinxi_tupian10.jpg','职位类别8','招聘人数8','工资待遇8','上班时间8','学历要求8','年龄要求8','工作详情8','2023-01-24','企业账号8','企业名称8','联系人8','联系电话8','企业地址8','2023-01-24 19:33:21'),(49,'2023-01-24 11:42:18','文员客服招聘','upload/企业-1674560509634.jpeg','文职','2人','4500-6000','8:00-17:00','大专以上','25-40','<p>就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容输入就业指导内容</p>','2023-01-24','11','江锥汽车','陈先生','13823888888','环市北路5号','2023-01-24 11:47:53');
/*!40000 ALTER TABLE `zhaopinxinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zhiweileibie`
--

DROP TABLE IF EXISTS `zhiweileibie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `zhiweileibie` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `zhiweileibie` varchar(200) DEFAULT NULL COMMENT '职位类别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COMMENT='职位类别';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zhiweileibie`
--

LOCK TABLES `zhiweileibie` WRITE;
/*!40000 ALTER TABLE `zhiweileibie` DISABLE KEYS */;
INSERT INTO `zhiweileibie` VALUES (31,'2023-01-24 11:33:21','职位类别1'),(32,'2023-01-24 11:33:21','职位类别2'),(33,'2023-01-24 11:33:21','职位类别3'),(34,'2023-01-24 11:33:21','职位类别4'),(35,'2023-01-24 11:33:21','职位类别5'),(36,'2023-01-24 11:33:21','职位类别6'),(37,'2023-01-24 11:33:21','职位类别7'),(38,'2023-01-24 11:33:21','职位类别8'),(39,'2023-01-24 11:38:33','文职');
/*!40000 ALTER TABLE `zhiweileibie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02 17:23:19
