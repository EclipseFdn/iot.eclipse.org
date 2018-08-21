+++
date = "2016-04-26"
title = "Smart Grid Automation (SGA) Software"
seo_title = "Case Study: Smart Grid Automation (SGA) Software"
link = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20Noja.pdf"
img = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20Noja.png"
company = "NOJA POWER"
description = "NOJA has adopted the Open Source Eclipse 4DIAC Framework for Industrial Automation and Control by embedding the 4DIAC FORTE Runtime Environment into its controllers, and integrating the 4DIAC IDE into its design toolset."
+++
<div class="row">
    <div class="col-md-12">

<p>NOJA Power (NOJA) researches, develops, manufactures and supplies low and medium voltage switchgear, specialising in auto reclosing circuit breakers for industrial, infrastructure and electricity distribution utilities.</p>
<p>NOJA&rsquo;s signature product is the OSM series of medium-voltage (11kV and above) Automatic Circuit Reclosers (ACRs) which combine vacuum interruptors and solid dielectric insulation for switching, with state-of-the-art microelectronics for protection, SCADA and automation.</p>
<p>NOJA&rsquo;s vision is to be the world leader in medium-voltage outdoor switchgear. The company has moved towards achieving that vision with the installation of more than 35,000 NOJA Power OSM series ACRs in over 84 countries worldwide.</p>
<p><strong>As NOJAs market penetration has increased, the company has faced these problems:</strong></p>
<ul>
<li>How to accommodate customisation requests from customers without incurring the QA overheads of touching their base code</li>
<li>How to provide a pathway toward distributed power system automation applications in the &ldquo;Smart Grid&rdquo; of the future</li>
</ul>
<p>Part of the long-term solution is IEC 61850, &ldquo;the&rdquo; standard for power system protection, SCADA and automation. NOJA has IEC 61850 firmly on its product roadmap. However IEC 61850 currently does not standardise the specification of application logic in Integrated Electronic Devices (IEDs) such as NOJA&rsquo;s RC10 Controller. This makes it impossible to deploy multi-vendor, portable automation schemes using IEC 61850 alone.</p>
<p>NOJA has turned to IEC 61499 to provide the crucial &ldquo;missing link.&rdquo; Now in its Second Edition, IEC 61499 supports the interoperable specification, development, deployment and execution of distributed industrial automation applications. NOJA has adopted the Open Source 4DIAC Framework for Industrial Automation and Control by embedding the 4DIAC FORTE Runtime Environment into its controllers, and integrating the 4DIAC IDE into its design toolset.</p>
<p><strong>Initially, NOJA have taken several steps to control the risk of &ldquo;unconstrained&rdquo; customisation:</strong></p>
<ul>
<li>Their implementation does not currently support the creation of new function block types &ndash; it includes only the standard types, plus a few NOJA specials for accessing their real-time database</li>
<li>But note that composite FBs can be created and used</li>
<li>The system limits the amount of CPU that FORTE can use, and prioritises it below critical protection and control functions</li>
<li>NOJA provides a special group of dynamically typed variables which can be mapped to and from the contents of IEC 61850 GOOSE messages</li>
</ul>
<p>Thanks to ongoing improvements in the 4DIAC suite, the solution looks great, works well, and provides excellent developer support.</p>
<p>One of NOJA&rsquo;s customers is already using this new capability in a stand-alone application, and NOJA is actively seeking development collaborators, especially Power Utilities, for distributed applications.</p>
<p><strong>NOJA has plans to improve the offering including:</strong></p>
<ul>
<li>Performance (speed) improvement</li>
<li>Co-opting one or more secure communication profiles, since secure communication over public infrastructure is an absolute must for power system applications.</li>
</ul>
</div>
</div>