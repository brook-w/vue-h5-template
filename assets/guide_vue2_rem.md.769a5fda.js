import{_ as s,o as a,c as n,R as o}from"./chunks/framework.6241eaf2.js";const d=JSON.parse('{"title":"rem 适配方案","description":"","frontmatter":{},"headers":[],"relativePath":"guide/vue2/rem.md","filePath":"guide/vue2/rem.md","lastUpdated":1687776555000}'),l={name:"guide/vue2/rem.md"},p=o(`<h1 id="rem-适配方案" tabindex="-1">rem 适配方案 <a class="header-anchor" href="#rem-适配方案" aria-label="Permalink to &quot;rem 适配方案&quot;">​</a></h1><p>不用担心，项目已经配置好了 <code>rem</code> 适配, 下面仅做介绍：</p><p>Vant 中的样式默认使用<code>px</code>作为单位，如果需要使用<code>rem</code>单位，推荐使用以下两个工具:</p><ul><li><a href="https://github.com/cuth/postcss-pxtorem" target="_blank" rel="noreferrer">postcss-pxtorem</a> 是一款 <code>postcss</code> 插件，用于将单位转化为 <code>rem</code></li><li><a href="https://github.com/amfe/lib-flexible" target="_blank" rel="noreferrer">lib-flexible</a> 用于设置 <code>rem</code> 基准值</li></ul><h5 id="postcss-配置" tabindex="-1">PostCSS 配置 <a class="header-anchor" href="#postcss-配置" aria-label="Permalink to &quot;PostCSS 配置&quot;">​</a></h5><p>下面提供了一份基本的 <code>postcss</code> 配置，可以在此配置的基础上根据项目需求进行修改</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// https://github.com/michael-ciniawsky/postcss-load-config</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">autoprefixer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">overrideBrowserslist</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Android 4.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">iOS 7.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Chrome &gt; 31</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ff &gt; 31</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ie &gt;= 8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">postcss-pxtorem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">rootValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">37.5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">propList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><p>更多详细信息： <a href="https://youzan.github.io/vant/#/zh-CN/quickstart#jin-jie-yong-fa" target="_blank" rel="noreferrer">vant</a></p><p><strong>新手必看，老鸟跳过</strong></p><p>很多小伙伴会问我，适配的问题,因为我们使用的是 Vant UI，所以必须根据 Vant UI 375 的设计规范走，一般我们的设计会将 UI 图上传到蓝湖，我们就可以需要的尺寸了。下面就大概普及一下 rem。</p><p>我们知道 <code>1rem</code> 等于<code>html</code> 根元素设定的 <code>font-size</code> 的 <code>px</code> 值。Vant UI 设置 <code>rootValue: 37.5</code>,你可以看到在 iPhone 6 下看到 （<code>1rem 等于 37.5px</code>）：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-dpr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">font-size: 37.5px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>切换不同的机型，根元素可能会有不同的<code>font-size</code>。当你写 css px 样式时，会被程序换算成 <code>rem</code> 达到适配。</p><p>因为我们用了 Vant 的组件，需要按照 <code>rootValue: 37.5</code> 来写样式。</p><p>举个例子：设计给了你一张 750px * 1334px 图片，在 iPhone6 上铺满屏幕,其他机型适配。</p><ul><li>当<code>rootValue: 70</code> , 样式 <code>width: 750px;height: 1334px;</code> 图片会撑满 iPhone6 屏幕，这个时候切换其他机型，图片也会跟着撑满。</li><li>当<code>rootValue: 37.5</code> 的时候，样式 <code>width: 375px;height: 667px;</code> 图片会撑满 iPhone6 屏幕。</li></ul><p>也就是 iphone 6 下 375px 宽度写 CSS。其他的你就可以根据你设计图，去写对应的样式就可以了。</p><p>当然，想要撑满屏幕你可以使用 100%，这里只是举例说明。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">image</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.sunniejs.cn/static/weapp/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* rootValue: 75 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">750px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1334px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* rootValue: 37.5 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">image</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">375px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">667px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,19),e=[p];function t(c,r,D,F,y,i){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
