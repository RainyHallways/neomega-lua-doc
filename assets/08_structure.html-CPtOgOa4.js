import{_ as n,c as s,o as a,a as e}from"./app-DJ6fbNhj.js";const p={},t=e(`<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> omega <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;omega&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> print <span class="token operator">=</span> omega<span class="token punctuation">.</span>system<span class="token punctuation">.</span>print</span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world! from example2&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> structures <span class="token operator">=</span> omega<span class="token punctuation">.</span>structures</span>
<span class="line"><span class="token keyword">local</span> blocks <span class="token operator">=</span> structures<span class="token punctuation">.</span>blocks</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 建筑文件,可以是 schem/schemaic/bdx/mcworld</span></span>
<span class="line"><span class="token keyword">local</span> source_structure_file <span class="token operator">=</span> <span class="token string">&quot;./空散云雾菜单2.0.bdx&quot;</span></span>
<span class="line"><span class="token comment">-- 在临时目录创建一个空建筑</span></span>
<span class="line"><span class="token keyword">local</span> source_structure_dir <span class="token operator">=</span> omega<span class="token punctuation">.</span>system<span class="token punctuation">.</span><span class="token function">temp_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- &quot;./omega_source_structure&quot; -- 临时建筑目录，所谓建筑目录其实就是基岩版存档的文件夹</span></span>
<span class="line"><span class="token comment">-- 从建筑文件中读取建筑到临时建筑目录</span></span>
<span class="line"><span class="token keyword">local</span> source_structure <span class="token operator">=</span> structures<span class="token punctuation">.</span><span class="token function">convert_file_to_structure</span><span class="token punctuation">(</span>source_structure_dir<span class="token punctuation">,</span> source_structure_file<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">-- 从mc基岩版存档地址(文件夹)中读取建筑</span></span>
<span class="line"><span class="token comment">-- local structure = structures.open_or_create_structure(&quot;mc基岩版存档地址&quot;)</span></span>
<span class="line"><span class="token comment">-- 在临时目录创建一个空建筑,如果目录是一个mc基岩版存档，则打开存档</span></span>
<span class="line"><span class="token keyword">local</span> target_structure_dir <span class="token operator">=</span> omega<span class="token punctuation">.</span>system<span class="token punctuation">.</span><span class="token function">temp_dir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- &quot;./omega_target_structure&quot; -- 输出建筑目录，所谓建筑目录其实就是基岩版存档的文件夹</span></span>
<span class="line"><span class="token keyword">local</span> target_structure <span class="token operator">=</span> structures<span class="token punctuation">.</span><span class="token function">open_or_create_structure</span><span class="token punctuation">(</span>target_structure_dir<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">:</span><span class="token function">get_file_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">-- source_structure:get_start_pos()</span></span>
<span class="line"><span class="token comment">-- source_structure:get_end_pos()</span></span>
<span class="line"><span class="token comment">-- source_structure:get_structure_name()</span></span>
<span class="line"><span class="token comment">-- source_structure:get_must_block_state()</span></span>
<span class="line"><span class="token comment">-- source_structure:gen_mcworld(&quot;输出文件名&quot;)</span></span>
<span class="line"><span class="token comment">-- source_structure:remove()</span></span>
<span class="line"><span class="token comment">-- source_structure:set_start_pos(pos)</span></span>
<span class="line"><span class="token comment">-- source_structure:set_end_pos(pos)</span></span>
<span class="line"><span class="token comment">-- source_structure:set_structure_name(name)</span></span>
<span class="line"><span class="token comment">-- source_structure:set_must_block_state(must_block_state)</span></span>
<span class="line"><span class="token comment">-- source_structure:apply_alter_to_blocks(start_pos, end_pos, alter_fn, option_ignore_air_block, option_ignore_nbt_block, option_ignore_normal_block)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 两个坐标相加</span></span>
<span class="line"><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">add_pos</span><span class="token punctuation">(</span>pos_1<span class="token punctuation">,</span> pos_2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        x <span class="token operator">=</span> pos_1<span class="token punctuation">.</span>x <span class="token operator">+</span> pos_2<span class="token punctuation">.</span>x<span class="token punctuation">,</span></span>
<span class="line">        y <span class="token operator">=</span> pos_1<span class="token punctuation">.</span>y <span class="token operator">+</span> pos_2<span class="token punctuation">.</span>y<span class="token punctuation">,</span></span>
<span class="line">        z <span class="token operator">=</span> pos_1<span class="token punctuation">.</span>z <span class="token operator">+</span> pos_2<span class="token punctuation">.</span>z</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 实际的建筑操作代码</span></span>
<span class="line"><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">convert_structure</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">,</span> target_structure<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 获得源建筑的起始位置和结束位置</span></span>
<span class="line">    <span class="token keyword">local</span> source_start_pos <span class="token operator">=</span> source_structure<span class="token punctuation">:</span><span class="token function">get_start_pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">local</span> source_end_pos <span class="token operator">=</span> source_structure<span class="token punctuation">:</span><span class="token function">get_end_pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">-- 将源建筑复制到目标建筑，偏移量(offset)为(0, 0, 0),如果需要移动建筑，可以修改offset</span></span>
<span class="line">    <span class="token keyword">local</span> offset <span class="token operator">=</span> <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> z <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">}</span></span>
<span class="line">    structures<span class="token punctuation">.</span><span class="token function">copy_structure</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">,</span> target_structure<span class="token punctuation">,</span> source_start_pos<span class="token punctuation">,</span> source_end_pos<span class="token punctuation">,</span> offset<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 本文件中只包含一个建筑，你可以自己搞更花哨的操作</span></span>
<span class="line">    <span class="token comment">-- 将位置、名称、是否必须使用 block state 等信息从源建筑复制到目标建筑 (因为只有一个建筑)</span></span>
<span class="line">    <span class="token keyword">local</span> target_start_pos <span class="token operator">=</span> <span class="token function">add_pos</span><span class="token punctuation">(</span>source_start_pos<span class="token punctuation">,</span> offset<span class="token punctuation">)</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">set_start_pos</span><span class="token punctuation">(</span>target_start_pos<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">local</span> target_end_pos <span class="token operator">=</span> <span class="token function">add_pos</span><span class="token punctuation">(</span>source_end_pos<span class="token punctuation">,</span> offset<span class="token punctuation">)</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">set_end_pos</span><span class="token punctuation">(</span>target_end_pos<span class="token punctuation">)</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">set_structure_name</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">:</span><span class="token function">get_structure_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">set_must_block_state</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">:</span><span class="token function">get_must_block_state</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">-- 对目标建筑进行修改，在这份文件生成时，命令方块的命令全部被提取出来，放在 key_strings 中</span></span>
<span class="line">    <span class="token comment">-- 你可以在这里对命令进行修改，然后再写回去</span></span>
<span class="line">    <span class="token comment">-- 修改的范围</span></span>
<span class="line">    <span class="token keyword">local</span> alter_start_pos <span class="token operator">=</span> target_start_pos</span>
<span class="line">    <span class="token keyword">local</span> alter_end_pos <span class="token operator">=</span> target_end_pos</span>
<span class="line">    <span class="token comment">-- 忽略范围内的空气方块</span></span>
<span class="line">    <span class="token keyword">local</span> option_ignore_air_block <span class="token operator">=</span> <span class="token keyword">true</span></span>
<span class="line">    <span class="token comment">-- 修改范围内的nbt方块</span></span>
<span class="line">    <span class="token keyword">local</span> option_ignore_nbt_block <span class="token operator">=</span> <span class="token keyword">false</span></span>
<span class="line">    <span class="token comment">-- 忽略范围内的非nbt方块</span></span>
<span class="line">    <span class="token keyword">local</span> option_ignore_normal_block <span class="token operator">=</span> <span class="token keyword">true</span></span>
<span class="line">    <span class="token comment">-- 对于每一个方块，都会调用 alter_fn 函数，该函数返回修改后的方块的 runtime id 和 nbt</span></span>
<span class="line">    <span class="token keyword">local</span> alter_fn <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> block_rtid<span class="token punctuation">,</span> nbt<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">local</span> nbt_type <span class="token operator">=</span> nbt<span class="token punctuation">:</span><span class="token function">get_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">-- 只需修改命令块的命令</span></span>
<span class="line">        <span class="token keyword">if</span> nbt_type <span class="token operator">==</span> <span class="token string">&quot;CommandBlock&quot;</span> <span class="token keyword">then</span></span>
<span class="line">            <span class="token keyword">local</span> key_name <span class="token operator">=</span> nbt<span class="token punctuation">:</span><span class="token function">get_string</span><span class="token punctuation">(</span><span class="token string">&quot;Command&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token comment">-- 将命令块的命令前加一个&quot;#&quot;,这样命令块就不会执行命令了,你也可以做其他修改</span></span>
<span class="line">            nbt<span class="token punctuation">:</span><span class="token function">set_string</span><span class="token punctuation">(</span><span class="token string">&quot;Command&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#&quot;</span> <span class="token operator">..</span> key_name<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">return</span> block_rtid<span class="token punctuation">,</span> nbt</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token comment">--  对目标建筑进行修改</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始修改目标建筑, 请稍等...\\n&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">apply_alter_to_blocks</span><span class="token punctuation">(</span></span>
<span class="line">        alter_start_pos<span class="token punctuation">,</span> alter_end_pos<span class="token punctuation">,</span>                                              <span class="token comment">-- 范围</span></span>
<span class="line">        alter_fn<span class="token punctuation">,</span>                                                                    <span class="token comment">-- 修改函数</span></span>
<span class="line">        option_ignore_air_block<span class="token punctuation">,</span> option_ignore_nbt_block<span class="token punctuation">,</span> option_ignore_normal_block <span class="token comment">-- 选项</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> target_structure</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">target_structure <span class="token operator">=</span> <span class="token function">convert_structure</span><span class="token punctuation">(</span>source_structure<span class="token punctuation">,</span> target_structure<span class="token punctuation">)</span></span>
<span class="line">source_structure<span class="token punctuation">:</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> progress_poller <span class="token operator">=</span> omega<span class="token punctuation">.</span>builder<span class="token punctuation">.</span><span class="token function">build_structure</span><span class="token punctuation">(</span></span>
<span class="line">    target_structure<span class="token punctuation">,</span>                  <span class="token comment">-- 需要被导入的建筑</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">get_start_pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">--被导入的建筑的起始位置</span></span>
<span class="line">    target_structure<span class="token punctuation">:</span><span class="token function">get_end_pos</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">--被导入建筑的结束位置</span></span>
<span class="line">    <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">31000</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> z <span class="token operator">=</span> <span class="token number">11000</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">--导入到的位置(租赁服中)</span></span>
<span class="line">    <span class="token number">2000</span><span class="token punctuation">,</span>                              <span class="token comment">-- 导入速度</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">-- 增量构建(false)</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">-- 强制使用block state(false),注：即时这里设置false，如果struceture中use_block_state为true，也会使用block state</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">-- 是否忽略nbt方块(false)</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">--导入时清除目标位置的方块(false)</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">--导入时清理掉落物(false)，注: 清理范围为整个租赁服，不止是导入的建筑范围</span></span>
<span class="line">    <span class="token keyword">false</span><span class="token punctuation">,</span>                             <span class="token comment">--导入时回退跃点(false)</span></span>
<span class="line">    <span class="token number">0</span>                                  <span class="token comment">--起始跃点</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">-- 因为一些原因，有时命令块需要导入两次才能保证全部导入，只导入一次可能会漏</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> mux_poller <span class="token operator">=</span> omega<span class="token punctuation">.</span>listen<span class="token punctuation">.</span><span class="token function">make_mux_poller</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">on_progress</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;progress: %s/%s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">format</span><span class="token punctuation">(</span>progress<span class="token punctuation">.</span>total<span class="token punctuation">,</span> progress<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> progress<span class="token punctuation">.</span>total <span class="token operator">==</span> progress<span class="token punctuation">.</span>current <span class="token keyword">then</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">-- 获得输出目录，输出目录为当前目录(.), 这是指程序运行的目录，不是本文件所在的目录</span></span>
<span class="line">        <span class="token keyword">local</span> output_dir <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span></span>
<span class="line">        <span class="token comment">-- 自动计算建议的输出文件名</span></span>
<span class="line">        <span class="token keyword">local</span> output_file_name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;%s/%s.mcworld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">format</span><span class="token punctuation">(</span>output_dir<span class="token punctuation">,</span> target_structure<span class="token punctuation">:</span><span class="token function">get_file_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">-- 将目标建筑写入到输出文件 (mcworld 格式)</span></span>
<span class="line">        target_structure<span class="token punctuation">:</span><span class="token function">gen_mcworld</span><span class="token punctuation">(</span>output_file_name<span class="token punctuation">)</span> <span class="token comment">-- 需要注意，调用这个函数后，建筑就无法再修改/导入/进行其他操作了，因为生成mcworld需要先关闭建筑</span></span>
<span class="line">        <span class="token comment">-- 当然，你可以再次打开建筑</span></span>
<span class="line">        <span class="token comment">-- 移除源建筑所在的目录</span></span>
<span class="line">        target_structure<span class="token punctuation">:</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">mux_poller<span class="token punctuation">:</span><span class="token function">poll</span><span class="token punctuation">(</span>progress_poller<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">while</span> mux_poller<span class="token punctuation">:</span><span class="token function">block_has_next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token keyword">local</span> event <span class="token operator">=</span> mux_poller<span class="token punctuation">:</span><span class="token function">block_get_next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> event<span class="token punctuation">.</span>type <span class="token operator">==</span> progress_poller <span class="token keyword">then</span></span>
<span class="line">        <span class="token keyword">local</span> progress <span class="token operator">=</span> event<span class="token punctuation">.</span>data</span>
<span class="line">        <span class="token function">on_progress</span><span class="token punctuation">(</span>progress<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 虽然没有在上面展示，不过这些函数也可以用:</span></span>
<span class="line"><span class="token comment">-- nbt 相关</span></span>
<span class="line"><span class="token comment">-- local new_nbt = blocks.new_nbt() -- 创建一个空的 nbt</span></span>
<span class="line"><span class="token comment">-- print(nbt:is_empty()) -- nbt 是否为空</span></span>
<span class="line"><span class="token comment">-- nbt:empty() -- 清空nbt</span></span>
<span class="line"><span class="token comment">-- local new_nbt=nbt:copy() -- 复制一个 nbt</span></span>
<span class="line"><span class="token comment">-- local str_like_nbt=nbt:to_str() -- 将 nbt 转换为 字符串</span></span>
<span class="line"><span class="token comment">-- print(str_like_nbt)</span></span>
<span class="line"><span class="token comment">-- nbt=nbt:from_str(str_like_nbt) -- 从 字符串 转换为 nbt</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- rtid 相关</span></span>
<span class="line"><span class="token comment">-- print((&quot;air rtid is %s \\n&quot;):format(blocks.AIR))                     -- 获取空气方块的 runtime id (rtid)</span></span>
<span class="line"><span class="token comment">-- local rtid, found = blocks.legacy_block_to_rtid(&quot;stained_glass&quot;, 1) -- 从名称和数据值获取 rtid\\</span></span>
<span class="line"><span class="token comment">-- if found then</span></span>
<span class="line"><span class="token comment">--     print((&quot;rtid of stained_glass with data value 1 is %s \\n&quot;):format(rtid))</span></span>
<span class="line"><span class="token comment">-- else</span></span>
<span class="line"><span class="token comment">--     print(&quot;stained_glass with data value 1 not found\\n&quot;)</span></span>
<span class="line"><span class="token comment">-- end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 从 rtid 获取方块的名称和数据值</span></span>
<span class="line"><span class="token comment">-- local block_name, data_value, found = blocks.rtid_to_legacy_block(rtid)</span></span>
<span class="line"><span class="token comment">-- if found then</span></span>
<span class="line"><span class="token comment">--     print((&quot;block name of rtid %s is %s, data value is %s \\n&quot;):format(rtid, block_name, data_value))</span></span>
<span class="line"><span class="token comment">-- else</span></span>
<span class="line"><span class="token comment">--     print((&quot;rtid %s not found\\n&quot;):format(rtid))</span></span>
<span class="line"><span class="token comment">-- end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 从 rtid 获取方块的 java str 名</span></span>
<span class="line"><span class="token comment">-- local java_str_name, found = blocks.rtid_to_java_str(rtid)</span></span>
<span class="line"><span class="token comment">-- if found then</span></span>
<span class="line"><span class="token comment">--     print((&quot;java str name of rtid %s is %s \\n&quot;):format(rtid, java_str_name))</span></span>
<span class="line"><span class="token comment">-- else</span></span>
<span class="line"><span class="token comment">--     print((&quot;rtid %s not found\\n&quot;):format(rtid))</span></span>
<span class="line"><span class="token comment">-- end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 从 java str 名 获取 rtid</span></span>
<span class="line"><span class="token comment">-- local rtid, found = blocks.java_str_to_rtid(java_str_name)</span></span>
<span class="line"><span class="token comment">-- if found then</span></span>
<span class="line"><span class="token comment">--     print((&quot;rtid of java str name %s is %s \\n&quot;):format(java_str_name, rtid))</span></span>
<span class="line"><span class="token comment">-- else</span></span>
<span class="line"><span class="token comment">--     print((&quot;java str name %s not found\\n&quot;):format(java_str_name))</span></span>
<span class="line"><span class="token comment">-- end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[t];function c(o,i){return a(),s("div",null,l)}const r=n(p,[["render",c],["__file","08_structure.html.vue"]]),d=JSON.parse('{"path":"/lua%E6%8F%92%E4%BB%B6%E7%BC%96%E5%86%99/%E5%BB%BA%E7%AD%91%E6%93%8D%E4%BD%9C/08_structure.html","title":"建筑操作","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"建筑操作","description":"建筑操作"},"headers":[],"git":{"updatedTime":1727773696000,"contributors":[{"name":"RainyHallways","email":"78735995+RainyHallways@users.noreply.github.com","commits":1}]},"filePathRelative":"lua插件编写/建筑操作/08_structure.md"}');export{r as comp,d as data};
