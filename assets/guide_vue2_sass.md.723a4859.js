import{_ as s,o as a,c as n,R as l}from"./chunks/framework.6241eaf2.js";const A=JSON.parse('{"title":"Sass 全局样式","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue2/sass.md","filePath":"guide/vue2/sass.md","lastUpdated":1687776555000}'),p={name:"guide/vue2/sass.md"},o=l(`<h1 id="sass-全局样式" tabindex="-1">Sass 全局样式 <a class="header-anchor" href="#sass-全局样式" aria-label="Permalink to &quot;Sass 全局样式&quot;">​</a></h1><p>首先 你可能会遇到 <code>node-sass</code> 安装不成功，别放弃多试几次！！！</p><p>每个页面自己对应的样式都写在自己的 .vue 文件之中 <code>scoped</code> 它顾名思义给 css 加了一个域的概念。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* global styles */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* local styles */</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><p>vue-h5-template 所有全局样式都在 <code>@/src/assets/css</code> 目录下设置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">assets</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">css</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.scss</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 全局通用样式</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mixin.scss</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 全局mixin</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">variables.scss</span><span style="color:#A6ACCD;">           </span><span style="color:#676E95;font-style:italic;"># 全局变量</span></span></code></pre></div><h4 id="自定义-vant-ui-样式" tabindex="-1">自定义 vant-ui 样式 <a class="header-anchor" href="#自定义-vant-ui-样式" aria-label="Permalink to &quot;自定义 vant-ui 样式&quot;">​</a></h4><p>现在我们来说说怎么重写 <code>vant-ui</code> 样式。由于 <code>vant-ui</code> 的样式我们是在全局引入的，所以你想在某个页面里面覆盖它的样式就不能加 <code>scoped</code>，但你又想只覆盖这个页面的 <code>vant</code> 样式，你就可在它的父级加一个 <code>class</code>，用命名空间来解决问题。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">about-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 你的命名空间 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  .van-button {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/* vant-ui 元素*/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="父组件改变子组件样式-深度选择器" tabindex="-1">父组件改变子组件样式 深度选择器 <a class="header-anchor" href="#父组件改变子组件样式-深度选择器" aria-label="Permalink to &quot;父组件改变子组件样式 深度选择器&quot;">​</a></h4><p>当你子组件使用了 <code>scoped</code> 但在父组件又想修改子组件的样式可以 通过 <code>&gt;&gt;&gt;</code> 来实现：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> &gt;&gt;&gt; </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-label="Permalink to &quot;全局变量&quot;">​</a></h4><p><code>vue.config.js</code> 配置使用 <code>css.loaderOptions</code> 选项,注入 <code>sass</code> 的 <code>mixin</code> <code>variables</code> 到全局，不需要手动引入 ,配置<code>$cdn</code>通过变量形式引入 cdn 地址,这样向所有 Sass/Less 样式传入共享的全局变量：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> IS_PROD </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> defaultSettings </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/config/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extract</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> IS_PROD</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sourceMap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">loaderOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 给 scss-loader 传递选项</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">scss</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 注入 \`sass\` 的 \`mixin\` \`variables\` 到全局, $cdn可以配置图片cdn</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 详情: https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">prependData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">                @import &quot;assets/css/mixin.scss&quot;;</span></span>
<span class="line"><span style="color:#C3E88D;">                @import &quot;assets/css/variables.scss&quot;;</span></span>
<span class="line"><span style="color:#C3E88D;">                $cdn: &quot;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">defaultSettings</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$cdn</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&quot;;</span></span>
<span class="line"><span style="color:#C3E88D;">                 </span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>设置 js 中可以访问 <code>$cdn</code>,<code>.vue</code> 文件中使用<code>this.$cdn</code>访问</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 引入全局样式</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/assets/css/index.scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置 js中可以访问 $cdn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 引入cdn</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$cdn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$cdn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> $cdn</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>在 css 和 js 使用</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$cdn)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">logo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">$cdn</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/weapp/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> center / contain no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,20),e=[o];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
