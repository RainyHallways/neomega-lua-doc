import{_ as n,c as s,o as a,a as t}from"./app-DJ6fbNhj.js";const o={},p=t(`<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h1><h2 id="生成一个-uuid-字符串" tabindex="-1"><a class="header-anchor" href="#生成一个-uuid-字符串"><span>生成一个 uuid 字符串</span></a></h2><ul><li>uuid() <ul><li>范围: 任意</li><li>说明: 生成一个 uuid 字符串</li><li>参数: 无</li><li>返回: uuid 字符串</li></ul><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="翻译" tabindex="-1"><a class="header-anchor" href="#翻译"><span>翻译</span></a></h2><ul><li>translate(input,type) <ul><li>范围: 任意</li><li>说明: 翻译特定的mc内容为中文</li><li>参数: <ul><li>input 输入字符串</li><li>type 翻译类型 &quot;mc&quot;/ &quot;block&quot;/&quot;item&quot;/&quot;conatiner_data&quot;/&quot;conatiner_slot_data/&quot;item_data&quot;</li></ul></li><li>返回: 翻译结果，是否成功</li></ul><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;stone&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 石头 true</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;stone&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">--石头 true</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;stone [type=?]&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;block&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 石头[type=?] true</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;iron_sword&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;item&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 铁剑 true</span></span>
<span class="line"><span class="token comment">-- 关于 &quot;conatiner_data&quot;/&quot;conatiner_slot_data/&quot;item_data&quot; 的获取，请参阅 bot action 这一章</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;0\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;stone\\&quot;,\\&quot;val\\&quot;:0,\\&quot;base_props\\&quot;:{\\&quot;can_place_on\\&quot;:[\\&quot;minecraft:grass\\&quot;,\\&quot;minecraft:stone\\&quot;],\\&quot;can_destroy\\&quot;:[\\&quot;minecraft:sand\\&quot;]},\\&quot;is_block\\&quot;:true,\\&quot;block_bedrock_state_string\\&quot;:\\&quot;[\\\\\\&quot;stone_type\\\\\\&quot;=\\\\\\&quot;stone\\\\\\&quot;]\\&quot;},\\&quot;count\\&quot;:5},\\&quot;1\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;minecraft:diamond_sword\\&quot;,\\&quot;val\\&quot;:0,\\&quot;base_props\\&quot;:{\\&quot;can_place_on\\&quot;:[\\&quot;minecraft:grass\\&quot;,\\&quot;minecraft:stone\\&quot;],\\&quot;can_destroy\\&quot;:[\\&quot;minecraft:sand\\&quot;],\\&quot;keep_on_death\\&quot;:true},\\&quot;is_block\\&quot;:false,\\&quot;display_name\\&quot;:\\&quot;剑1\\&quot;},\\&quot;count\\&quot;:1},\\&quot;2\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;white_shulker_box\\&quot;,\\&quot;val\\&quot;:0,\\&quot;is_block\\&quot;:true,\\&quot;block_bedrock_state_string\\&quot;:\\&quot;[]\\&quot;,\\&quot;complex_block_data\\&quot;:{\\&quot;container\\&quot;:{\\&quot;0\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;minecraft:writable_book\\&quot;,\\&quot;val\\&quot;:0,\\&quot;is_block\\&quot;:false,\\&quot;specific_known_item_data\\&quot;:{\\&quot;pages\\&quot;:[\\&quot;0\\&quot;,\\&quot;0\\&quot;,\\&quot;0\\&quot;]}},\\&quot;count\\&quot;:1},\\&quot;1\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;minecraft:written_book\\&quot;,\\&quot;val\\&quot;:0,\\&quot;is_block\\&quot;:false,\\&quot;specific_known_item_data\\&quot;:{\\&quot;pages\\&quot;:[\\&quot;0\\&quot;,\\&quot;0\\&quot;,\\&quot;0\\&quot;],\\&quot;book_author\\&quot;:\\&quot;无名之人\\&quot;,\\&quot;book_name\\&quot;:\\&quot;有名之书\\&quot;}},\\&quot;count\\&quot;:1},\\&quot;2\\&quot;:{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;minecraft:written_book\\&quot;,\\&quot;val\\&quot;:0,\\&quot;is_block\\&quot;:false,\\&quot;specific_known_item_data\\&quot;:{\\&quot;pages\\&quot;:[\\&quot;0\\&quot;,\\&quot;0\\&quot;,\\&quot;0\\&quot;],\\&quot;book_author\\&quot;:\\&quot;无名之人\\&quot;,\\&quot;book_name\\&quot;:\\&quot;有名之书\\&quot;},\\&quot;display_name\\&quot;:\\&quot;铁砧\\&quot;},\\&quot;count\\&quot;:1}}}},\\&quot;count\\&quot;:1}}&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;container_data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">-- 容器内容:</span></span>
<span class="line"><span class="token comment">--  5个 石头[特殊值=0] 物品方块属性:[&quot;stone_type&quot;=&quot;stone&quot;]</span></span>
<span class="line"><span class="token comment">--  |  -基础属性:</span></span>
<span class="line"><span class="token comment">--  |   可被放置于:  草方块 石头</span></span>
<span class="line"><span class="token comment">--  1个 钻石剑[特殊值=0]</span></span>
<span class="line"><span class="token comment">--  |  -基础属性:</span></span>
<span class="line"><span class="token comment">--  |   可被放置于:  草方块 石头</span></span>
<span class="line"><span class="token comment">--  |   死亡时保留</span></span>
<span class="line"><span class="token comment">--  |  -被命名为: 剑1</span></span>
<span class="line"><span class="token comment">--  1个 白色潜影盒[特殊值=0] 物品方块属性:[]</span></span>
<span class="line"><span class="token comment">--  |  -包含子容器: </span></span>
<span class="line"><span class="token comment">--  |   容器内容:</span></span>
<span class="line"><span class="token comment">--  |     1个 书与笔[特殊值=0]</span></span>
<span class="line"><span class="token comment">--  |     |  -信息:书名:  作者:  页数: 3</span></span>
<span class="line"><span class="token comment">--  |     1个 minecraft:written_book[特殊值=0]</span></span>
<span class="line"><span class="token comment">--  |     |  -信息:书名: 有名之书 作者: 无名之人 页数: 3</span></span>
<span class="line"><span class="token comment">--  |     1个 minecraft:written_book[特殊值=0]</span></span>
<span class="line"><span class="token comment">--  |     |  -信息:书名: 有名之书 作者: 无名之人 页数: 3</span></span>
<span class="line"><span class="token comment">--  |     |  -被命名为: 铁砧 false</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;item\\&quot;:{\\&quot;name\\&quot;:\\&quot;stone\\&quot;,\\&quot;val\\&quot;:0,\\&quot;base_props\\&quot;:{\\&quot;can_place_on\\&quot;:[\\&quot;minecraft:grass\\&quot;,\\&quot;minecraft:stone\\&quot;],\\&quot;can_destroy\\&quot;:[\\&quot;minecraft:sand\\&quot;]},\\&quot;is_block\\&quot;:true,\\&quot;block_bedrock_state_string\\&quot;:\\&quot;[\\\\\\&quot;stone_type\\\\\\&quot;=\\\\\\&quot;stone\\\\\\&quot;]\\&quot;},\\&quot;count\\&quot;:5}&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;container_slot_data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">-- 5个 石头[特殊值=0] 物品方块属性:[&quot;stone_type&quot;=&quot;stone&quot;]</span></span>
<span class="line"><span class="token comment">-- -基础属性:</span></span>
<span class="line"><span class="token comment">--  可被放置于:  草方块 石头 false</span></span>
<span class="line">coromega<span class="token punctuation">:</span><span class="token function">print</span><span class="token punctuation">(</span>coromega<span class="token punctuation">:</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token string">&quot;{\\&quot;name\\&quot;:\\&quot;stone\\&quot;,\\&quot;val\\&quot;:0,\\&quot;base_props\\&quot;:{\\&quot;can_place_on\\&quot;:[\\&quot;minecraft:grass\\&quot;,\\&quot;minecraft:stone\\&quot;],\\&quot;can_destroy\\&quot;:[\\&quot;minecraft:sand\\&quot;]},\\&quot;is_block\\&quot;:true,\\&quot;block_bedrock_state_string\\&quot;:\\&quot;[\\\\\\&quot;stone_type\\\\\\&quot;=\\\\\\&quot;stone\\\\\\&quot;]\\&quot;}&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;item_data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">-- 石头[特殊值=0] 物品方块属性:[&quot;stone_type&quot;=&quot;stone&quot;]</span></span>
<span class="line"><span class="token comment">-- -基础属性:</span></span>
<span class="line"><span class="token comment">-- 可被放置于:  草方块 石头 false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="字符串操作" tabindex="-1"><a class="header-anchor" href="#字符串操作"><span>字符串操作</span></a></h2><p>由于默认的 lua 解释器对含中文字符串的位置相关操作是以byte为基准的,<br> 例如 &quot;一二三&quot; 不是3个字而是 9 个比特，然而这样很反直觉，且给字符串截取操作带来很多困难，<br> 为此，我们将字符串相关所有位置信息都改为 rune 实现，即按 字 来计算<br> 以下是一些例子</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lua user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lua&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 7    9</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lua user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lua&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- nil</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 2 2</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- nil</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lua user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lua&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 7    9</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lua user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lua&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- nil</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 2 2</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- nil</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">gsub</span><span class="token punctuation">(</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;z&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- zzza    3</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">gsub</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;三&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;十&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 一二十四五</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token string">&quot;Lua&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- auL</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token string">&quot;一二三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 一二三</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;the value is:%d&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- the value is:4</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">char</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">--abcd</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">char</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">98</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">22235</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">--abc四</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;ABCD&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 68</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 22235</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 3</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token string">&quot;一二三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 3</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">rep</span><span class="token punctuation">(</span><span class="token string">&quot;abcd&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- abcdabcd</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">rep</span><span class="token punctuation">(</span><span class="token string">&quot;一二三&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 一二三一二三</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token string">&quot;一二三四五&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">--三四</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;I have 2 questions for you.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%d+ %a+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 2 questions</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;I have 二 questions for you.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二 %a+&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 2 questions</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;I have 2 questions for you.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;(%d+) (%a+)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 2, &quot;questions&quot;</span></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token string">&quot;I have 二 questions for you.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;(二) (%a+)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- 二, &quot;questions&quot;</span></span>
<span class="line"><span class="token keyword">for</span> word <span class="token keyword">in</span> string<span class="token punctuation">.</span><span class="token function">gmatch</span><span class="token punctuation">(</span><span class="token string">&quot;二Hello 二Lua 二user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二%a+&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">	<span class="token function">print</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token comment">-- 二Hello</span></span>
<span class="line"><span class="token comment">-- 二Lua</span></span>
<span class="line"><span class="token comment">-- 二user</span></span>
<span class="line"><span class="token keyword">for</span> word <span class="token keyword">in</span> string<span class="token punctuation">.</span><span class="token function">gmatch</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Lua user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%a+&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">	<span class="token function">print</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token comment">-- Hello</span></span>
<span class="line"><span class="token comment">-- Lua</span></span>
<span class="line"><span class="token comment">-- user</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u=[p];function c(e,l){return a(),s("div",null,u)}const k=n(o,[["render",c],["__file","common.html.vue"]]),r=JSON.parse('{"path":"/lua%E6%8F%92%E4%BB%B6%E7%BC%96%E5%86%99/%E5%85%B6%E4%BB%96/common.html","title":"其他","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"其他","description":"其他"},"headers":[{"level":2,"title":"生成一个 uuid 字符串","slug":"生成一个-uuid-字符串","link":"#生成一个-uuid-字符串","children":[]},{"level":2,"title":"翻译","slug":"翻译","link":"#翻译","children":[]},{"level":2,"title":"字符串操作","slug":"字符串操作","link":"#字符串操作","children":[]}],"git":{"updatedTime":1727773696000,"contributors":[{"name":"RainyHallways","email":"78735995+RainyHallways@users.noreply.github.com","commits":1}]},"filePathRelative":"lua插件编写/其他/common.md"}');export{k as comp,r as data};
