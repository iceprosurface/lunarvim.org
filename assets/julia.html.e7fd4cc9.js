import{r as o,o as i,c as l,a as s,b as e,F as p,e as t,d as n}from"./app.087e5e0d.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=t(`<h1 id="julia" tabindex="-1"><a class="header-anchor" href="#julia" aria-hidden="true">#</a> Julia</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall julia
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2>`,4),d=n("The Juila language server, LanguageServer.jl, needs to be manually installed. To install LanguageServer.jl in the location where "),h={href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#julials",target:"_blank",rel:"noopener noreferrer"},g=n("nvim-lspconfig expects"),m=n(" run the following terminal command:"),_=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>julia --project<span class="token operator">=~</span>/.julia/environments/nvim-lspconfig -e <span class="token string">&#39;using Pkg; Pkg.add(&quot;LanguageServer&quot;)&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Create the file <code>~/.config/lvim/ftplugin/julia.lua</code> with the following line to start the language server when opening Julia files.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token keyword">local</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
<span class="token comment">-- re-use common lsp configurations (keybindings, buffer-highlight and cmp integration)</span>
opts <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;lvim.lsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get_common_opts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lspconfig&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>julials<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="supporting-plugins" tabindex="-1"><a class="header-anchor" href="#supporting-plugins" aria-hidden="true">#</a> Supporting Plugins</h2>`,4),b=n("For Latex-to-Unicode substitutions, block-wise movements, and other niceties for writing Julia, install the "),k={href:"https://github.com/JuliaEditorSupport/julia-vim",target:"_blank",rel:"noopener noreferrer"},v=n("julia-vim "),f=n(" plugin."),j=s("h2",{id:"pro-tip",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pro-tip","aria-hidden":"true"},"#"),n(" Pro Tip")],-1),x=n("To leverage the "),w={href:"https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.edit-Tuple%7BAny%7D",target:"_blank",rel:"noopener noreferrer"},I=n("edit"),q=n(" functionality with LunarVim use the "),y={href:"https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#InteractiveUtils.define_editor",target:"_blank",rel:"noopener noreferrer"},L=n("define_editor"),S=n(" method in "),T=s("code",null,"~/.julia/config/startup.jl",-1),U=t(`<div class="language-julia ext-julia line-numbers-mode"><pre class="language-julia"><code><span class="token keyword">using</span> InteractiveUtils

ENV<span class="token punctuation">[</span><span class="token string">&quot;JULIA_EDITOR&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;lvim&quot;</span>

InteractiveUtils<span class="token punctuation">.</span>define_editor<span class="token punctuation">(</span>
    <span class="token regex">r&quot;lvim&quot;</span><span class="token punctuation">,</span> wait<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">do</span> cmd<span class="token punctuation">,</span> path<span class="token punctuation">,</span> line
    <span class="token string">\`$cmd +$line $path\`</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,1);function E(J,V){const a=o("ExternalLinkIcon");return i(),l(p,null,[u,s("p",null,[d,s("a",h,[g,e(a)]),m]),_,s("p",null,[b,s("a",k,[v,e(a)]),f]),j,s("p",null,[x,s("a",w,[I,e(a)]),q,s("a",y,[L,e(a)]),S,T]),U],64)}var P=r(c,[["render",E]]);export{P as default};
