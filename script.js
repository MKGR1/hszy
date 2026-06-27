/**
 * 王子鸣 · 独立原创插画师主页 — script.js
 * 温柔治愈交互 · 分类筛选 · 图片弹窗 · 流程轮播 · 深色模式
 */
(function () {
  'use strict';

  /* =============================================================
     图片容错 — 加载失败时自动替换为备用图
     ============================================================= */
  var IMG_FALLBACK = './images/ink-01.jpg';

  function setImgOnError(img) {
    img.addEventListener('error', function () {
      if (this.src.indexOf(IMG_FALLBACK) === -1) {
        this.src = IMG_FALLBACK;
        this.alt = '图片加载失败';
      }
    });
  }

  /* =============================================================
     画廊数据定义 — 6大分类 × 8张
     图片来源: 涂鸦王国 gracg.com 本地图片
     ============================================================= */

  // ==========================================
  // ① 梦境叙事 · 场景插画
  // ==========================================

  // 墨韵流芳
  const inkData = [
    { id: 'ink-01', src: './images/ink-01.jpg', title: '仙袂流云', desc: '女子头戴金饰，衣袂缠绕彩绸流云，蓝花点缀裙身，云雾缭绕周身，色彩清雅梦幻，自带缥缈出尘的仙气。', category: 'ink' },
    { id: 'ink-02', src: './images/ink-02.jpg', title: '水墨仕女', desc: '极简黑白水墨勾勒古风女子，发髻雅致，眉眼柔和，寥寥几笔晕染衣料纹理，笔墨简练却尽显古典温婉韵味。', category: 'ink' },
    { id: 'ink-03', src: './images/ink-03.jpg', title: '龙侠仗剑', desc: '水墨泼洒出盘旋墨龙，少年侠客持剑而立，身姿凌厉，黑白笔墨尽显江湖豪迈，藏人与龙共生的侠气风骨。', category: 'ink' },
    { id: 'ink-04', src: './images/ink-04.jpg', title: '山水寻幽', desc: '层叠奇峰藏飞瀑，古松临水，石桥上二人漫步，江面扁舟轻摇，云雾漫过山峦，绘尽中式山水的静谧悠然。', category: 'ink' },
    { id: 'ink-05', src: './images/ink-05.jpg', title: '孤舟隐士', desc: '烟雨湖面波光粼粼，白衣隐士独乘小舟，岸边桃枝盛放，飞鸟掠过远山，淡墨晕染出独属于隐士的清逸孤寂。', category: 'ink' },
    { id: 'ink-06', src: './images/ink-06.jpg', title: '江湖群像', desc: '四位古装江湖儿女，前景女子眉眼温婉，身后三人各有风骨，飞墨笔触勾勒长发衣袂，勾勒出结伴同行的江湖羁绊。', category: 'ink' },
  ];

  // 水色氤氲
  const waterData = [
    { id: 'water-01', src: './images/water-01.jpg', title: '岁月老者', desc: '通透水彩勾勒戴帽老者，皱纹藏尽半生风霜，淡蓝灰调晕染柔和光影，沉静眼神道尽时光沉淀下的安然从容。', category: 'water' },
    { id: 'water-02', src: './images/water-02.jpg', title: '戏曲花旦', desc: '国风水彩绘京剧旦角，牡丹桃花环绕发髻，粉调花钿眉眼温婉，笔墨细腻，尽显东方戏曲独有的柔美雅致。', category: 'water' },
    { id: 'water-03', src: './images/water-03.jpg', title: '樱下对望', desc: '春日樱花纷飞，少年少女背靠背静立林间，柔光穿透花叶铺满周身，清新绿调水彩，藏着青涩温柔的心动。', category: 'water' },
    { id: 'water-04', src: './images/water-04.jpg', title: '森林微光', desc: '治愈系手绘森林插画，幽深绿植间迸发柔和金光，小女孩独自望向光源，充满童话感与治愈的静谧氛围。', category: 'water' },
    { id: 'water-05', src: './images/water-05.jpg', title: '蔷薇初恋', desc: '院墙蔷薇盛放，校服少女抬手轻拈花枝望向少年，暖调动漫水彩，定格校园里纯粹清甜的暧昧瞬间。', category: 'water' },
    { id: 'water-06', src: './images/water-06.jpg', title: '古典贵妃', desc: '红金国风工笔美人，华贵金饰搭配盛放牡丹，青红飘带飘逸舒展，浓烈色彩衬出古典贵妃雍容华贵的气韵。', category: 'water' },
  ];

  // 油彩华章
  const oilData = [
    { id: 'oil-01', src: './images/oil-01.jpg', title: '粉蓝花野', desc: '厚涂油画铺展淡蓝粉调花海，朦胧柔雾晕染远景，柔和马卡龙色系笔触轻盈，满是温柔治愈的春日氛围感。', category: 'oil' },
    { id: 'oil-02', src: './images/oil-02.jpg', title: '草坪柯基', desc: '鲜亮绿意草坪上三色柯基吐舌端坐，厚重笔触塑造蓬松毛发，林间柔光洒落，画面鲜活充满元气治愈感。', category: 'oil' },
    { id: 'oil-03', src: './images/oil-03.jpg', title: '风中人影', desc: '冷灰旷野天色，短碎刮刀笔触切割画面，人物半身被风的线条裹挟，冷暖撞色营造孤寂朦胧的情绪氛围感。', category: 'oil' },
    { id: 'oil-04', src: './images/oil-04.jpg', title: '梵高向日葵', desc: '融合星月夜漩涡星空与向日葵花田，红棕卷发画家立于花海拉琴，浓烈厚涂笔触复刻梵高标志性奔放画风。', category: 'oil' },
    { id: 'oil-05', src: './images/oil-05.jpg', title: '溪畔花女', desc: '暖金色光束穿透林间，白衣少女持花静立睡莲溪边，粉紫花海环绕水面，柔光渐变色调梦幻柔和，满是静谧温柔。', category: 'oil' },
    { id: 'oil-06', src: './images/oil-06.jpg', title: '窗边瓶花', desc: '浅灰素净桌面摆放透明花瓶，缤纷杂色鲜花搭配鲜果，柔和侧光虚化轮廓，通透水彩质感恬淡安静。', category: 'oil' },
    { id: 'oil-07', src: './images/oil-07.jpg', title: '星海厚涂', desc: '高肌理刮刀油画绘制深夜云海，深浅蓝紫层层堆叠，细碎星光散落云层，立体笔触打造深邃浩瀚的银河夜空。', category: 'oil' },
    { id: 'oil-08', src: './images/oil-08.jpg', title: '乡野晚霞', desc: '浓烈厚涂色块堆叠黄昏天际，橙红与明黄撞色铺满天空，下方青绿草甸搭配乡间小屋，浓烈色彩充满原野热烈气息。', category: 'oil' },
    { id: 'oil-09', src: './images/oil-09.jpg', title: '草坪比熊', desc: '澄澈蓝天之下白色比熊端坐花间，蓬松毛发用厚重白色颜料刻画，白蝶环绕飞舞，清新明亮充满春日童趣。', category: 'oil' },
    { id: 'oil-10', src: './images/oil-10.jpg', title: '素白玫瑰', desc: '低饱和浅灰底色衬两朵白玫瑰，细腻柔和笔触弱化轮廓，淡雅素净的色调，安静温柔充满静谧文艺气息。', category: 'oil' },
  ];

  // 粉妆玉琢
  const powderData = [
    { id: 'powder-01', src: './images/powder-01.jpg', title: '闪粉粉芍', desc: '柔雾底色铺展层层粉牡丹，花瓣点缀细碎银闪，朦胧水彩质感柔和朦胧，满是温柔甜美的梦幻氛围感。', category: 'powder' },
    { id: 'powder-02', src: './images/powder-02.jpg', title: '幻彩鸢尾', desc: '澄澈宝蓝背景衬托鸢尾花，花瓣泛着镭射虹彩光泽，细碎星光散落画面，通透流光质感高级精致。', category: 'powder' },
    { id: 'powder-03', src: './images/powder-03.jpg', title: '爱马仕幻海插画', desc: '复古装饰画风格，拱形边框融合海浪、彩鱼、飞鸟与热气球，粉紫暖调搭配精致纹样，兼具童趣与奢侈品插画的典雅质感。', category: 'powder' },
    { id: 'powder-04', src: './images/powder-04.jpg', title: '粉底花语油画', desc: '低饱和粉色底色，厚涂肌理花卉铺满画面，镭射闪片穿插笔触，搭配治愈英文短句，温柔文艺适合做壁纸。', category: 'powder' },
    { id: 'powder-05', src: './images/powder-05.jpg', title: '深海幻彩水母', desc: '澄澈蓝海之中，半透明水母舒展飘带般触手，伞身折射彩虹碎光，清透二次元画风静谧空灵，自带深海治愈感。', category: 'powder' },
    { id: 'powder-06', src: './images/powder-06.jpg', title: '穆夏风紫花神女', desc: '新艺术穆夏卡牌构图，鎏金光晕环绕紫发女子，发丝缠绕淡紫繁花，边框布满复古十字纹样，紫粉金配色典雅复古。', category: 'powder' },
  ];

  // 传神写照
  const portraitData = [
    { id: 'portrait-01', src: './images/portrait-01.jpg', title: '复古人像素描', desc: '做旧褶皱牛皮纸底色，铅笔细致勾勒男士五官与微卷发丝，明暗层次柔和，复古质感尽显成熟沉稳的人物气质。', category: 'portrait' },
    { id: 'portrait-02', src: './images/portrait-02.jpg', title: '窗边少女速写', desc: '随性排线勾勒窗边长发少女，背景用交叉线条虚化室内场景，松弛笔触捕捉慵懒柔和的氛围感，日常速写感十足。', category: 'portrait' },
    { id: 'portrait-03', src: './images/portrait-03.jpg', title: '线条老者素描', desc: '无序缠绕的随性线条构成老年学者肖像，眼镜、胡须与蓬松白发用凌乱笔触表现，充满抽象速写的艺术张力。', category: 'portrait' },
    { id: 'portrait-04', src: './images/portrait-04.jpg', title: '少年淡彩速写', desc: '钢笔线条勾勒连帽衫少年，局部浅粉蓝淡彩晕染烘托轮廓，干净利落的线条，清新温柔的少年感扑面而来。', category: 'portrait' },
    { id: 'portrait-05', src: './images/portrait-05.jpg', title: '水墨灰调女像', desc: '炭笔水墨晕染长发少女肖像，大面积虚实结合的墨色虚化发丝与肩颈，留白柔和朦胧，自带清冷安静的氛围感。', category: 'portrait' },
    { id: 'portrait-06', src: './images/portrait-06.jpg', title: '厚涂色块男肖像', desc: '刮刀厚涂油画塑造斜靠青年，冷暖杂糅色块拼接面部肌理，粗犷奔放的笔触，浓烈富有冲击感的写实人像。', category: 'portrait' },
  ];

  // 山川揽胜
  const landscapeData = [
    { id: 'landscape-01', src: './images/landscape-01.jpg', title: '奇幻云境王城', desc: '动漫风格幻想风景，螺旋星云云海铺满天际，山谷间坐落尖顶城堡群，青绿原野与河流交织，澄澈蓝天充满治愈奇幻感。', category: 'landscape' },
    { id: 'landscape-02', src: './images/landscape-02.jpg', title: '湖心魔法古堡', desc: '幽蓝天光笼罩湖面，层层绿岛环绕高耸尖顶古堡，水面倒映云层与建筑，静谧深邃的魔幻水乡秘境氛围感拉满。', category: 'landscape' },
    { id: 'landscape-03', src: './images/landscape-03.jpg', title: '梵高风森林晨光', desc: '致敬星月夜漩涡笔触，仰拍茂密林木，黄绿螺旋纹理构成光晕天幕，飞鸟掠过浅青晴空，浓烈油画肌理温暖治愈。', category: 'landscape' },
    { id: 'landscape-04', src: './images/landscape-04.jpg', title: '阿尔卑斯绿野', desc: '扁平插画风山野图景，纯白雪山矗立远景，层层递进的嫩绿色草甸散落木屋与松林，配色清新柔和，简约治愈。', category: 'landscape' },
    { id: 'landscape-05', src: './images/landscape-05.jpg', title: '国潮青绿山水', desc: '新中式金线山水，青碧奇峰缠绕流云，山间古亭错落，金圆旭日悬于天际，流畅云纹线条勾勒东方清雅意境。', category: 'landscape' },
    { id: 'landscape-06', src: './images/landscape-06.jpg', title: '镜面蓝海孤舟', desc: '澄澈浅海如镜面完美复刻天空云团，一叶小舟行于透亮碧水，水下珊瑚纹理清晰，极简干净的治愈海景。', category: 'landscape' },
  ];

  const allGalleryData = [].concat(
    // 墨韵流芳
    { id: 'ink-01', src: './images/ink-01.jpg', title: '仙袂流云', desc: '女子头戴金饰，衣袂缠绕彩绸流云，蓝花点缀裙身，云雾缭绕周身，色彩清雅梦幻，自带缥缈出尘的仙气。', category: 'ink', featured: true },
    { id: 'ink-02', src: './images/ink-02.jpg', title: '水墨仕女', desc: '极简黑白水墨勾勒古风女子，发髻雅致，眉眼柔和，寥寥几笔晕染衣料纹理，笔墨简练却尽显古典温婉韵味。', category: 'ink', featured: true },
    { id: 'ink-03', src: './images/ink-03.jpg', title: '龙侠仗剑', desc: '水墨泼洒出盘旋墨龙，少年侠客持剑而立，身姿凌厉，黑白笔墨尽显江湖豪迈，藏人与龙共生的侠气风骨。', category: 'ink' },
    { id: 'ink-04', src: './images/ink-04.jpg', title: '山水寻幽', desc: '层叠奇峰藏飞瀑，古松临水，石桥上二人漫步，江面扁舟轻摇，云雾漫过山峦，绘尽中式山水的静谧悠然。', category: 'ink' },
    { id: 'ink-05', src: './images/ink-05.jpg', title: '孤舟隐士', desc: '烟雨湖面波光粼粼，白衣隐士独乘小舟，岸边桃枝盛放，飞鸟掠过远山，淡墨晕染出独属于隐士的清逸孤寂。', category: 'ink' },
    { id: 'ink-06', src: './images/ink-06.jpg', title: '江湖群像', desc: '四位古装江湖儿女，前景女子眉眼温婉，身后三人各有风骨，飞墨笔触勾勒长发衣袂，勾勒出结伴同行的江湖羁绊。', category: 'ink' },

    // 水色氤氲
    { id: 'water-01', src: './images/water-01.jpg', title: '岁月老者', desc: '通透水彩勾勒戴帽老者，皱纹藏尽半生风霜，淡蓝灰调晕染柔和光影，沉静眼神道尽时光沉淀下的安然从容。', category: 'water', featured: true },
    { id: 'water-02', src: './images/water-02.jpg', title: '戏曲花旦', desc: '国风水彩绘京剧旦角，牡丹桃花环绕发髻，粉调花钿眉眼温婉，笔墨细腻，尽显东方戏曲独有的柔美雅致。', category: 'water', featured: true },
    { id: 'water-03', src: './images/water-03.jpg', title: '樱下对望', desc: '春日樱花纷飞，少年少女背靠背静立林间，柔光穿透花叶铺满周身，清新绿调水彩，藏着青涩温柔的心动。', category: 'water' },
    { id: 'water-04', src: './images/water-04.jpg', title: '森林微光', desc: '治愈系手绘森林插画，幽深绿植间迸发柔和金光，小女孩独自望向光源，充满童话感与治愈的静谧氛围。', category: 'water' },
    { id: 'water-05', src: './images/water-05.jpg', title: '蔷薇初恋', desc: '院墙蔷薇盛放，校服少女抬手轻拈花枝望向少年，暖调动漫水彩，定格校园里纯粹清甜的暧昧瞬间。', category: 'water' },
    { id: 'water-06', src: './images/water-06.jpg', title: '古典贵妃', desc: '红金国风工笔美人，华贵金饰搭配盛放牡丹，青红飘带飘逸舒展，浓烈色彩衬出古典贵妃雍容华贵的气韵。', category: 'water' },

    // 油彩华章
    { id: 'oil-01', src: './images/oil-01.jpg', title: '粉蓝花野', desc: '厚涂油画铺展淡蓝粉调花海，朦胧柔雾晕染远景，柔和马卡龙色系笔触轻盈，满是温柔治愈的春日氛围感。', category: 'oil', featured: true },
    { id: 'oil-02', src: './images/oil-02.jpg', title: '草坪柯基', desc: '鲜亮绿意草坪上三色柯基吐舌端坐，厚重笔触塑造蓬松毛发，林间柔光洒落，画面鲜活充满元气治愈感。', category: 'oil', featured: true },
    { id: 'oil-03', src: './images/oil-03.jpg', title: '风中人影', desc: '冷灰旷野天色，短碎刮刀笔触切割画面，人物半身被风的线条裹挟，冷暖撞色营造孤寂朦胧的情绪氛围感。', category: 'oil' },
    { id: 'oil-04', src: './images/oil-04.jpg', title: '梵高向日葵', desc: '融合星月夜漩涡星空与向日葵花田，红棕卷发画家立于花海拉琴，浓烈厚涂笔触复刻梵高标志性奔放画风。', category: 'oil' },
    { id: 'oil-05', src: './images/oil-05.jpg', title: '溪畔花女', desc: '暖金色光束穿透林间，白衣少女持花静立睡莲溪边，粉紫花海环绕水面，柔光渐变色调梦幻柔和，满是静谧温柔。', category: 'oil' },
    { id: 'oil-06', src: './images/oil-06.jpg', title: '窗边瓶花', desc: '浅灰素净桌面摆放透明花瓶，缤纷杂色鲜花搭配鲜果，柔和侧光虚化轮廓，通透水彩质感恬淡安静。', category: 'oil' },
    { id: 'oil-07', src: './images/oil-07.jpg', title: '星海厚涂', desc: '高肌理刮刀油画绘制深夜云海，深浅蓝紫层层堆叠，细碎星光散落云层，立体笔触打造深邃浩瀚的银河夜空。', category: 'oil' },
    { id: 'oil-08', src: './images/oil-08.jpg', title: '乡野晚霞', desc: '浓烈厚涂色块堆叠黄昏天际，橙红与明黄撞色铺满天空，下方青绿草甸搭配乡间小屋，浓烈色彩充满原野热烈气息。', category: 'oil' },
    { id: 'oil-09', src: './images/oil-09.jpg', title: '草坪比熊', desc: '澄澈蓝天之下白色比熊端坐花间，蓬松毛发用厚重白色颜料刻画，白蝶环绕飞舞，清新明亮充满春日童趣。', category: 'oil' },
    { id: 'oil-10', src: './images/oil-10.jpg', title: '素白玫瑰', desc: '低饱和浅灰底色衬两朵白玫瑰，细腻柔和笔触弱化轮廓，淡雅素净的色调，安静温柔充满静谧文艺气息。', category: 'oil' },

    // 粉妆玉琢
    { id: 'powder-01', src: './images/powder-01.jpg', title: '闪粉粉芍', desc: '柔雾底色铺展层层粉牡丹，花瓣点缀细碎银闪，朦胧水彩质感柔和朦胧，满是温柔甜美的梦幻氛围感。', category: 'powder', featured: true },
    { id: 'powder-02', src: './images/powder-02.jpg', title: '幻彩鸢尾', desc: '澄澈宝蓝背景衬托鸢尾花，花瓣泛着镭射虹彩光泽，细碎星光散落画面，通透流光质感高级精致。', category: 'powder', featured: true },
    { id: 'powder-03', src: './images/powder-03.jpg', title: '爱马仕幻海插画', desc: '复古装饰画风格，拱形边框融合海浪、彩鱼、飞鸟与热气球，粉紫暖调搭配精致纹样，兼具童趣与奢侈品插画的典雅质感。', category: 'powder' },
    { id: 'powder-04', src: './images/powder-04.jpg', title: '粉底花语油画', desc: '低饱和粉色底色，厚涂肌理花卉铺满画面，镭射闪片穿插笔触，搭配治愈英文短句，温柔文艺适合做壁纸。', category: 'powder' },
    { id: 'powder-05', src: './images/powder-05.jpg', title: '深海幻彩水母', desc: '澄澈蓝海之中，半透明水母舒展飘带般触手，伞身折射彩虹碎光，清透二次元画风静谧空灵，自带深海治愈感。', category: 'powder' },
    { id: 'powder-06', src: './images/powder-06.jpg', title: '穆夏风紫花神女', desc: '新艺术穆夏卡牌构图，鎏金光晕环绕紫发女子，发丝缠绕淡紫繁花，边框布满复古十字纹样，紫粉金配色典雅复古。', category: 'powder' },

    // 传神写照
    { id: 'portrait-01', src: './images/portrait-01.jpg', title: '复古人像素描', desc: '做旧褶皱牛皮纸底色，铅笔细致勾勒男士五官与微卷发丝，明暗层次柔和，复古质感尽显成熟沉稳的人物气质。', category: 'portrait', featured: true },
    { id: 'portrait-02', src: './images/portrait-02.jpg', title: '窗边少女速写', desc: '随性排线勾勒窗边长发少女，背景用交叉线条虚化室内场景，松弛笔触捕捉慵懒柔和的氛围感，日常速写感十足。', category: 'portrait', featured: true },
    { id: 'portrait-03', src: './images/portrait-03.jpg', title: '线条老者素描', desc: '无序缠绕的随性线条构成老年学者肖像，眼镜、胡须与蓬松白发用凌乱笔触表现，充满抽象速写的艺术张力。', category: 'portrait' },
    { id: 'portrait-04', src: './images/portrait-04.jpg', title: '少年淡彩速写', desc: '钢笔线条勾勒连帽衫少年，局部浅粉蓝淡彩晕染烘托轮廓，干净利落的线条，清新温柔的少年感扑面而来。', category: 'portrait' },
    { id: 'portrait-05', src: './images/portrait-05.jpg', title: '水墨灰调女像', desc: '炭笔水墨晕染长发少女肖像，大面积虚实结合的墨色虚化发丝与肩颈，留白柔和朦胧，自带清冷安静的氛围感。', category: 'portrait' },
    { id: 'portrait-06', src: './images/portrait-06.jpg', title: '厚涂色块男肖像', desc: '刮刀厚涂油画塑造斜靠青年，冷暖杂糅色块拼接面部肌理，粗犷奔放的笔触，浓烈富有冲击感的写实人像。', category: 'portrait' },

    // 山川揽胜
    { id: 'landscape-01', src: './images/landscape-01.jpg', title: '奇幻云境王城', desc: '动漫风格幻想风景，螺旋星云云海铺满天际，山谷间坐落尖顶城堡群，青绿原野与河流交织，澄澈蓝天充满治愈奇幻感。', category: 'landscape', featured: true },
    { id: 'landscape-02', src: './images/landscape-02.jpg', title: '湖心魔法古堡', desc: '幽蓝天光笼罩湖面，层层绿岛环绕高耸尖顶古堡，水面倒映云层与建筑，静谧深邃的魔幻水乡秘境氛围感拉满。', category: 'landscape', featured: true },
    { id: 'landscape-03', src: './images/landscape-03.jpg', title: '梵高风森林晨光', desc: '致敬星月夜漩涡笔触，仰拍茂密林木，黄绿螺旋纹理构成光晕天幕，飞鸟掠过浅青晴空，浓烈油画肌理温暖治愈。', category: 'landscape' },
    { id: 'landscape-04', src: './images/landscape-04.jpg', title: '阿尔卑斯绿野', desc: '扁平插画风山野图景，纯白雪山矗立远景，层层递进的嫩绿色草甸散落木屋与松林，配色清新柔和，简约治愈。', category: 'landscape' },
    { id: 'landscape-05', src: './images/landscape-05.jpg', title: '国潮青绿山水', desc: '新中式金线山水，青碧奇峰缠绕流云，山间古亭错落，金圆旭日悬于天际，流畅云纹线条勾勒东方清雅意境。', category: 'landscape' },
    { id: 'landscape-06', src: './images/landscape-06.jpg', title: '镜面蓝海孤舟', desc: '澄澈浅海如镜面完美复刻天空云团，一叶小舟行于透亮碧水，水下珊瑚纹理清晰，极简干净的治愈海景。', category: 'landscape' },

  );

  const catDataMap = {
    ink: inkData,
    water: waterData,
    oil: oilData,
    powder: powderData,
    portrait: portraitData,
    landscape: landscapeData,
  };

  const catDescriptions = {
    ink: '墨韵流淌于纸面，浓淡干湿间尽显东方意境。以水墨为媒，晕染山川花鸟与人物神韵，在黑白之间抵达无限遐想。',
    water: '清透水色在画面中氤氲扩散，如晨雾般温柔朦胧。水彩独有的通透感与随性肌理，带来梦幻而治愈的视觉体验。',
    oil: '油彩的厚重质感与丰富层次，赋予画面华美的表现力。厚涂堆叠间光影交错，色彩在笔触的舞蹈中诉说炽热的情感。',
    powder: '粉彩特有的柔和质感，如脂粉轻扫般细腻温暖。淡雅柔和的色调在画纸上晕开，呈现如玉般温润的视觉感受。',
    portrait: '以形写神，捕捉人物神态中最动人的瞬间。每一幅肖像都是与灵魂的对话，眉眼间的故事等待观者细细品读。',
    landscape: '行走山川之间，以画笔记录大自然的壮美与灵秀。从巍峨峰峦到静谧湖泊，每一处风景都是天地馈赠的诗篇。',
  };

  /* =============================================================
     DOM 引用
     ============================================================= */
  const loader = document.getElementById('pageLoader');
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinksA = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section[id]');
  const darkToggle = document.getElementById('darkToggle');
  const backBtn = document.getElementById('backToTop');
  const grid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catTabs = document.querySelectorAll('.cat-tab');
  const catDesc = document.getElementById('catDesc');
  const btnViewAll = document.getElementById('btnViewAll');
  const processTrack = document.getElementById('processTrack');
  const processPrev = document.getElementById('processPrev');
  const processNext = document.getElementById('processNext');
  const processDots = document.getElementById('processDots');
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbCaption = document.getElementById('lbCaption');
  const lbCounter = document.getElementById('lbCounter');
  const lbDots = document.getElementById('lbDots');
  const lbClose = document.getElementById('lbClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  const heroTitle = document.getElementById('typeTitle');

  /* =============================================================
     状态
     ============================================================= */
  let currentFilter = 'all';
  let currentItems = [];
  let lbItems = [];
  let lbIndex = 0;
  let processIndex = 0;
  let totalProcessCards = 0;
  let isDark = false;

  /* =============================================================
     1. 页面加载动画（强制消失 + 进度提示）
     ============================================================= */
  var loaderStatus = document.getElementById('loaderStatus');
  var loaderText = document.getElementById('loaderText');

  function updateLoader(msg) {
    if (loaderStatus) loaderStatus.textContent = msg || '';
  }

  function hideLoader() {
    var el = document.getElementById('pageLoader');
    if (el) {
      el.classList.add('hidden');
      document.body.classList.add('loaded');
    }
  }

  // 强制隐藏加载器（无论资源是否加载完毕）
  var forceHideTimer = setTimeout(function () {
    hideLoader();
  }, 3000);

  // 页面完全加载后隐藏
  window.addEventListener('load', function () {
    clearTimeout(forceHideTimer);
    setTimeout(hideLoader, 300);
  });

  /* =============================================================
     2. Hero 标题逐字淡入
     ============================================================= */
  function initHeroTitle() {
    var text = heroTitle.textContent;
    heroTitle.textContent = '';
    var chars = text.split('');
    var html = '';
    chars.forEach(function (c, i) {
      var space = c === ' ' ? '&nbsp;' : c;
      html += '<span class="char" style="animation-delay:' + (i * 0.06) + 's">' + space + '</span>';
    });
    heroTitle.innerHTML = html;
  }

  /* =============================================================
     3. 导航栏滚动效果
     ============================================================= */
  function handleNavScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* =============================================================
     4. 导航高亮
     ============================================================= */
  function updateActiveLink() {
    var scrollY = window.scrollY + 140;
    var current = 'hero';
    sections.forEach(function (sec) {
      var top = sec.offsetTop;
      var bottom = top + sec.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        current = sec.id;
      }
    });
    navLinksA.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });

  /* =============================================================
     5. 移动端菜单
     ============================================================= */
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // 点击链接关闭菜单
  navLinksA.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // 点击外部关闭菜单
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });

  /* =============================================================
     6. 滚动淡入 (Intersection Observer)
     ============================================================= */
  function initScrollReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { observer.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('revealed'); });
    }
  }

  /* =============================================================
     7. 分类标签切换
     ============================================================= */
  catTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      catTabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      var cat = this.dataset.cat;
      var desc = catDescriptions[cat] || '';
      catDesc.innerHTML = '<p>' + desc + '</p>';
      catDesc.classList.remove('revealed');
      requestAnimationFrame(function () {
        catDesc.classList.add('revealed');
      });

      // 同步筛选
      filterBtns.forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.filter === cat);
      });
      filterGallery(cat);
    });
  });

  /* =============================================================
     8. 作品画廊
     ============================================================= */
  function getCategoryLabel(cat) {
    return { ink: '墨韵流芳', water: '水色氤氲', oil: '油彩华章', powder: '粉妆玉琢', portrait: '传神写照', landscape: '山川揽胜' }[cat] || '';
  }

  function renderGallery(items) {
    if (!grid) return;
    grid.innerHTML = '';
    grid.style.opacity = '0';
    setTimeout(function () {
      grid.style.opacity = '1';
    }, 50);

    items.forEach(function (item, idx) {
      var div = document.createElement('div');
      div.className = 'gallery-item';
      div.style.setProperty('--delay', (idx % 6) * 0.06 + 's');
      div.dataset.index = idx;

      var img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title || '';
      img.loading = 'lazy';
      img.width = 400;
      img.height = 300;
      setImgOnError(img);

      div.innerHTML =
        '<div class="gallery-overlay"></div>';
      div.insertBefore(img, div.firstChild);
      div.insertAdjacentHTML('beforeend',
        '<div class="gallery-label">' +
          '<div class="gallery-cat">' + (getCategoryLabel(item.category) || '作品') + '</div>' +
          '<div class="gallery-name">' + item.title + '</div>' +
          (item.desc ? '<div class="gallery-desc">' + item.desc + '</div>' : '') +
        '</div>'
      );
      div.addEventListener('click', function () {
        openLightbox(currentItems, parseInt(this.dataset.index));
      });
      grid.appendChild(div);
    });
  }

  function filterGallery(filter) {
    currentFilter = filter;
    if (filter === 'all') {
      currentItems = allGalleryData.filter(function (item) { return item.featured; });
    } else {
      currentItems = allGalleryData.filter(function (item) { return item.category === filter; });
    }
    renderGallery(currentItems);

    filterBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterGallery(this.dataset.filter);
      // 同步分类标签
      var cat = this.dataset.filter;
      catTabs.forEach(function (tab) {
        tab.classList.toggle('active', tab.dataset.cat === cat);
      });
      if (cat !== 'all') {
        catDesc.innerHTML = '<p>' + (catDescriptions[cat] || '') + '</p>';
        catDesc.classList.remove('revealed');
        requestAnimationFrame(function () { catDesc.classList.add('revealed'); });
      }
    });
  });

  // 初始渲染
  filterGallery('all');

  // 浏览全部
  btnViewAll.addEventListener('click', function () {
    openLightbox(allGalleryData, 0);
  });

  /* =============================================================
     9. Lightbox 弹窗
     ============================================================= */
  function openLightbox(items, index) {
    lbItems = items;
    lbIndex = index;
    renderLbDots();
    showLbItem();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function renderLbDots() {
    lbDots.innerHTML = '';
    lbItems.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'lb-dot-btn' + (i === lbIndex ? ' active' : '');
      dot.dataset.index = i;
      dot.addEventListener('click', function () {
        goToLb(parseInt(this.dataset.index));
      });
      lbDots.appendChild(dot);
    });
  }

  function updateLbDots() {
    var dots = lbDots.querySelectorAll('.lb-dot-btn');
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === lbIndex);
    });
  }

  function showLbItem() {
    var item = lbItems[lbIndex];
    if (!item) return;
    lbImage.src = item.src;
    lbImage.alt = item.title || '';
    lbImage.classList.remove('zoomed');
    var captionHtml = '';
    if (item.title) {
      captionHtml += '<span style="display:block;font-weight:400;letter-spacing:2px;margin-bottom:4px;">' + item.title + '</span>';
    }
    if (item.desc) {
      captionHtml += item.desc;
    }
    lbCaption.innerHTML = captionHtml || '';
    lbCounter.textContent = (lbIndex + 1) + ' / ' + lbItems.length;
    updateLbDots();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImage.classList.remove('zoomed');
  }

  function goToLb(index) {
    if (!lbItems.length) return;
    if (index < 0) index = lbItems.length - 1;
    if (index >= lbItems.length) index = 0;
    lbIndex = index;
    showLbItem();
  }

  function nextLb() { goToLb(lbIndex + 1); }
  function prevLb() { goToLb(lbIndex - 1); }

  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', nextLb);
  lbPrev.addEventListener('click', prevLb);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-bg')) {
      closeLightbox();
    }
  });

  // 键盘导航
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nextLb(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevLb(); }
  });

  // 鼠标滚轮缩放
  lbImage.addEventListener('wheel', function (e) {
    e.preventDefault();
    this.classList.toggle('zoomed');
  }, { passive: false });

  // 点击图片切换缩放
  lbImage.addEventListener('click', function () {
    this.classList.toggle('zoomed');
  });

  // 触屏滑动
  (function () {
    var startX = 0, diffX = 0;
    var vp = lightbox.querySelector('.lb-viewport');
    vp.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      diffX = 0;
    }, { passive: true });
    vp.addEventListener('touchmove', function (e) {
      diffX = e.touches[0].clientX - startX;
    }, { passive: true });
    vp.addEventListener('touchend', function () {
      if (diffX < -50) nextLb();
      else if (diffX > 50) prevLb();
    }, { passive: true });
  })();

  /* =============================================================
     10. 创作流程轮播
     ============================================================= */
  function initProcessCarousel() {
    var cards = processTrack.querySelectorAll('.process-card');
    totalProcessCards = cards.length;

    // 创建圆点
    processDots.innerHTML = '';
    for (var i = 0; i < totalProcessCards; i++) {
      var dot = document.createElement('button');
      dot.className = 'process-dot' + (i === 0 ? ' active' : '');
      dot.dataset.index = i;
      dot.addEventListener('click', function () {
        goToProcess(parseInt(this.dataset.index));
      });
      processDots.appendChild(dot);
    }

    updateProcessArrows();
  }

  function getProcessScroll() {
    if (window.innerWidth <= 768) {
      // 手机端每个卡片占满
      return processTrack.querySelector('.process-card').offsetWidth + 18; // gap
    }
    return processTrack.querySelector('.process-card').offsetWidth + 18;
  }

  function goToProcess(index) {
    if (index < 0) index = 0;
    if (index >= totalProcessCards) index = totalProcessCards - 1;
    processIndex = index;

    var scrollAmount = 0;
    var cards = processTrack.querySelectorAll('.process-card');
    for (var i = 0; i < index; i++) {
      scrollAmount += cards[i].offsetWidth + 18;
    }

    processTrack.style.transform = 'translateX(-' + scrollAmount + 'px)';
    updateProcessDots();
    updateProcessArrows();
  }

  function updateProcessDots() {
    var dots = processDots.querySelectorAll('.process-dot');
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === processIndex);
    });
  }

  function updateProcessArrows() {
    processPrev.style.opacity = processIndex === 0 ? '0.3' : '1';
    processPrev.style.pointerEvents = processIndex === 0 ? 'none' : 'auto';
    processNext.style.opacity = processIndex >= totalProcessCards - 1 ? '0.3' : '1';
    processNext.style.pointerEvents = processIndex >= totalProcessCards - 1 ? 'none' : 'auto';
  }

  processNext.addEventListener('click', function () {
    goToProcess(processIndex + 1);
  });
  processPrev.addEventListener('click', function () {
    goToProcess(processIndex - 1);
  });

  // 触摸滑动流程
  (function () {
    var startX = 0, diffX = 0;
    var wrap = processTrack;
    wrap.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      diffX = 0;
    }, { passive: true });
    wrap.addEventListener('touchmove', function (e) {
      diffX = e.touches[0].clientX - startX;
    }, { passive: true });
    wrap.addEventListener('touchend', function () {
      if (diffX < -60) goToProcess(processIndex + 1);
      else if (diffX > 60) goToProcess(processIndex - 1);
    }, { passive: true });
  })();

  // 窗口大小变化重置流程
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      goToProcess(processIndex);
    }, 200);
  });

  /* =============================================================
     11. 深色模式
     ============================================================= */
  darkToggle.addEventListener('click', function () {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  });

  /* =============================================================
     12. 回到顶部
     ============================================================= */
  window.addEventListener('scroll', function () {
    var show = window.scrollY > 400;
    backBtn.classList.toggle('visible', show);
    darkToggle.classList.toggle('visible', show);
  }, { passive: true });

  backBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* =============================================================
     13. 按钮点击反馈
     ============================================================= */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.btn-primary, .btn-outline, .btn-more, .filter-btn, .cat-tab, .form-submit, .social-icon, .footer-social-link, .dark-toggle');
    if (!btn) return;
    btn.style.transform += ' scale(0.96)';
    setTimeout(function () {
      btn.style.transform = btn.style.transform.replace(' scale(0.96)', '');
    }, 150);
  });

  /* =============================================================
     14. 鼠标悬停文字变色
     ============================================================= */
  // 在 CSS 中已通过 hover 实现

  /* =============================================================
     初始化（含错误保护）
     ============================================================= */
  try {
    updateLoader('正在加载页面结构...');
    initHeroTitle();
    initScrollReveal();
    if (typeof initProcessCarousel === 'function') initProcessCarousel();
    handleNavScroll();
    updateLoader('加载完成');
  } catch (e) {
    // 发生错误时确保加载器隐藏，页面仍然可用
    hideLoader();
  }

  // Lightbox 图片容错
  if (lbImage) setImgOnError(lbImage);

  /* =============================================================
     邮箱「密码」跳转（charCode 隐蔽存储，防 HTML 源码暴露）
     =============================================================
     密码：789456123hszy
     如需修改密码，在浏览器控制台执行：
       "新密码".split('').map(c => c.charCodeAt(0))
     获取新 charCode 数组替换下方 pwd 行。

     如需修改目标网址，同理：
       "新网址".split('').map(c => c.charCodeAt(0))
     替换下方 targetUrl 行。
     ============================================================= */
  (function() {
    var pwd = String.fromCharCode(55,56,57,52,53,54,49,50,51,104,115,122,121); // 789456123hszy
    var targetUrl = String.fromCharCode(104,116,116,112,115,58,47,47,101,120,97,109,112,108,101,46,99,111,109); // https://example.com（请修改为你自己的目标网址）
    var form = document.getElementById('commissionForm');
    var emailInput = document.getElementById('formEmail');
    var submitBtn = form ? form.querySelector('.form-submit') : null;
    if (form && emailInput && submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        if (emailInput.value === pwd) {
          e.preventDefault();
          window.location.href = targetUrl;
        }
      });
    }
  })();

})();
