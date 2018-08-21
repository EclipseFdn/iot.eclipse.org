+++
date = "2017-10-11"
title = "Supporting Software Updates with Open Source IoT"
seo_title = "Case Study: Supporting Software Updates with Open Source IoT"
link = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20Kynetics.pdf"
img = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20Kynetics.png"
company = "Kynetics"
weight = 100
description = "Kynetics is using Eclipse hawkBit to provide a platform for remote software updates of embedded systems."
+++
<div class="row">
    <div class="col-md-12">

<p>Kynetics is a Software Development Company with offices in California and Italy. It was founded in 2006 and specializes in embedded and server-side technologies. Kynetics provides tools and services that feature an integrated and consistent Internet of Things (IoT) development software pipeline. The company provides software as a service (SaaS) that is reliable and resilient, built utilizing open source technologies to deploy software updates to IoT devices, along with a recovery system for safe measure. </p>

<p>The decision for Kynetics to use open source technologies was mainly driven by the licensing model, but they also wanted to build their solution on a solid foundation from the start. Many great companies and developers from various industries contribute to open source. This means that a very good infrastructure has been created and the technologies have been used and tested by others. &ldquo;Today it is too expensive, resource intensive, and time consuming to start something from scratch. It just makes sense to base your technology on open source,&rdquo; says co-founder and CEO Nicola La Gloria.</p>

<p>The Kynetics team wanted to give back to the open source community after many years of leveraging it to create their technologies. That&rsquo;s why they co-founded warpx.io (www.warpx.io), a community that supports the Warp board reference design. Warp is an open source platform that is designed for wearables, sensors, and IoT devices. It&rsquo;s a small form-factor embedded system that can be directly integrated into a final design. If it wasn&rsquo;t clear by now, La Gloria confirms it by saying, &ldquo;The Kynetics team fully believes that IoT must be transparent, secure, and open.&rdquo;</p>

<h2 class="purple">Using Eclipse IoT Technology</h2>

<p>Currently, the core focus at Kynetics is to provide a platform for remote software updates. They see an advantage in using the set of Eclipse IoT projects in their technologies because of the Eclipse Foundation&rsquo;s reputation and its professional approach to project governance, quality standards, and licensing.</p>

<p>Kynetics now uses various Eclipse IoT projects, including</p>

<ul>
<li><strong>Eclipse Mosquitto and Eclipse Paho</strong> for machine-to-machine (M2M) communication</li>
<li><strong>Eclipse Kura, Eclipse Kapua, and Eclipse Equinox</strong> for software provisioning and management</li>
<li><strong>Eclipse Kura and Eclipse hawkBit</strong> for embedded gateway services implementation </li>
<li><strong>Eclipse Hono</strong> for device to cloud data management</li>
</ul>

<p>Eclipse hawkBit is a great backend for software updates. It bridges the gap between the device and provisioning system by interpreting the rollout use cases efficiently and adding value to the process by managing arbitrary device data and tagging. This can all easily be deployed thanks to hawkBit&rsquo;s Docker packaging. </p>

<p>The Kynetics team started using hawkBit because they integrate SWUpdate &mdash; a Linux update project aiming to provide a safe and efficient way to update embedded systems &mdash; into Warp, their open source wearable platform. </p>

<p>Another advantage identified by the Kynetics team is the fact that hawkBit is written with Spring Boot, which made using hawkBit technology a no-brainer for their team. Kynetics already uses Spring Boot internally and externally, as well as in their Edge IoT platform. Edge IoT is a lightweight IoT middleware that connects embedded devices, gathers data, and provides application interfaces to a device management platform. </p>

<p>For all these reasons, Kynetics was able to extend hawkBit even further to meet their company&rsquo;s needs and to include multi-tenant environment support. By leveraging their embedded software and backend systems experience along with Eclipse hawkBit, they created a remote software rollout platform called Update Factory (https://www.kynetics.com/update-factory). The platform&rsquo;s functionality includes triggers for groups of devices to perform an update and an image repository, as well as basic reporting and monitoring capabilities. The platform features an &ldquo;Android-like&rdquo; single copy device-recovery system, which is robust if something goes awry during the update (for example, if the device is unplugged and the update fails halfway through because it runs out of battery), and is integrated with the hawkBit API.</p>

<h2 class="purple">Open IoT Technology and the Future</h2>

<p>&ldquo;The Eclipse Foundation [puts] forth great effort to provide open source contributions in the IoT space, which translates to vitality and enthusiasm. This is very important to us,&rdquo; says La Gloria<em>. </em>Before relying on any technology, developers and companies need to know that they are architected and written with quality, long life, and maintenance in mind. Only then can they use a technology for production products with minimal risk. An umbrella like the Eclipse Foundation makes the evaluation and selection process straightforward. Even if the initial project contributor decides to move on, the project remains open and in the hands of the Foundation. In other words, it can still be used, contributed to, and improved.</p>

<p>Various industries now realize that IoT is and will remain indispensable to the success of their business. It&rsquo;s also slowly becoming apparent to them that IoT must be transparent, secure, and open. That&rsquo;s one of the reasons why Kynetics chose Eclipse IoT. Eclipse IoT is one of the drivers of the open source IoT initiative. It will influence and play an important role in the future of software across many industries. When all is said and done, companies that use open source IoT technology today will have the competitive advantage in the future.</p>


</div>
</div>