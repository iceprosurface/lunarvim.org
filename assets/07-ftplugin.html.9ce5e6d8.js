import{e}from"./app.087e5e0d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=e(`<h1 id="ftplugin-filetype-plugin" tabindex="-1"><a class="header-anchor" href="#ftplugin-filetype-plugin" aria-hidden="true">#</a> FTPlugin (filetype plugin)</h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2><p>From <code>:h ftplugin</code></p><blockquote><p>A filetype plugin is like a global plugin, except that it sets options and defines mappings for the current buffer only.</p></blockquote><p>Example for setting specific <code>shiftwidth</code> and <code>tabstop</code> that only apply for <code>C</code> file-types.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- create a file at $LUNARVIM_CONFIG_DIR/after/ftplugin/c.lua</span>
vim<span class="token punctuation">.</span><span class="token function">cmd</span><span class="token punctuation">(</span><span class="token string">&quot;setlocal tabstop=4 shiftwidth=4&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6);function s(i,p){return t}var l=n(a,[["render",s]]);export{l as default};
