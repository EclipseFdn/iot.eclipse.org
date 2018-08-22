+++
date = "2017-05-17"
title = "Deploying IoT on Germany's DB Railway System"
seo_title = "Case Study: Deploying IoT on Germany's DB Railway System"
link = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20DB.pdf"
img = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20DB.png"
company = "Deutsche Bahn"
weight = 100
description = "Deutsche Bahn has adopted Eclipse Paho’s open source MQTT libraries and Eclipse Mosquitto to make their railway system more efficient and to create more value for their passengers."
+++
<div class="row">
    <div class="col-md-12">

<p>Deutsche Bahn AG (DB), German Railway, is one of the largest transport and logistics companies in the world. DB Systel is DB&rsquo;s internal Information and Communication Technology (ICT) partner, providing modern and efficient ICT products and services on the national and international level.&nbsp;</p>
<p>The rail expertise of DB Systel covers the whole lifecycle of ICT solutions, from planning and development to operation and optimization. &ldquo;Our goal is to be the company that integrates and enables digitalization at Deutsche Bahn,&rdquo; says Alexander Schmitt, Chief Architect at DB Systel.</p>
<p>For decades, the DB rail system solutions communicated via machine-to-machine (M2M) solutions, such as Short-Message-Service (SMS). However, SMS systems have become expensive to run and maintain. A decision was made to modernize them and replace the M2M technologies with Internet of Things (IoT) technologies, making the railway system more efficient and economical.</p>

<h2 class="purple">
Adopting Open Source 
</h2>

<p>Once the decision was made to move towards more modern solutions, different communication standards and protocols were considered for creating the blueprint of future DB solutions. After evaluation, DB adopted a mix of MQTT and HTTP as the communication standard between the trains and wayside monitoring systems. </p>
<p>The adoption of MQTT led DB to use Eclipse Paho&rsquo;s open source MQTT libraries. As a state-owned organization, DB is subject to a regulatory system, which means that purchasing proprietary software is complex. The freely available open source libraries made it easy for DB to utilize the MQTT clients for their different use cases. &ldquo;Open source is great because it&rsquo;s all there, it&rsquo;s all open. It makes it much easier to collaborate with vendors and other organizations. It also ensures we can be interoperable with other solutions; which is very important to us,&rdquo; says Schmitt.&nbsp;</p>

<h2 class="purple">
    Use Cases
</h2>

<p>DB has been deploying Eclipse technology on trains for five years. Eclipse Equinox (an OSGi runtime) and EclipseLink (a Java persistence solution) were already part of the Java stack used in DB trains. Therefore, it was a comfortable decision to add Eclipse Paho to this Java stack to provide MQTT client support. On the back end of the MQTT broker is IBM MessageSight.</p>
<p>Over the last five years, DB Systel has been rolling out new modern IoT applications, using Eclipse Paho. Here are some examples:</p>


<h3 class="purple">
CASE 1 - Long Distance Trains
</h3>



<p>Today, the long-distance trains use a combination of Eclipse Paho, MQTT, and a Java Client to send messages. The trains send real-time information about their location, delay, and diagnostic checks. Data such as updated connection information is immediately pushed from the control center to the train and is displayed on the train entertainment system and on monitors inside the train.</p>
<p>The fleet comprises about 400 long distance trains that each send location data every 10 seconds via an Eclipse Paho client. This data is sent to the IBM MessageSight server running in the DB data center. The passenger information is transmitted via 3,000 MQTT messages per day per vehicle, depending on the number of turnaround cycles. In total, there is an estimated 600 vehicles with gateways on board.</p>
<p>In addition to long distance trains, an increasing number of modern locomotives for regional and cargo traffic send their location data every 10 seconds. This data is used for various business cases such as delay prognosis and forecast, predictive maintenance, and positional data for consumers.</p>

<h3 class="purple">
CASE 2 - Dynamic Text Displays
</h3>

<p>At stations with low passenger volume, travel information data is sent to smaller platform displays that show schedule updates like delays, cancellations, or platform changes. These smaller LED text displays are low power devices that run a custom build of Eclipse Paho. There are about 6,500 edge devices spread across Germany, each receiving a total of 25 messages per second.</p>

<h3 class="purple">
CASE 3 Escalators &amp; Elevators
</h3>

<p>Every escalator and elevator at DB train stations have sensors monitoring their operations. An estimated 3,000 edge devices send a total of 10 MQTT messages per second to the central monitoring application. The transmitted data varies from simple state information such as whether the escalator is running or not, or more detailed information like power consumption, door opening/door closing, etc. The calculated state of the facilities are monitored by an API on an open data platform, enabling the development of internal and third party apps. The GSM terminals used are Gemalto EHS5/6, running a Java ME runtime. The Midlet used to collect data and communicate with the central datacenter uses a custom build of Eclipse Paho.</p>


<h3 class="purple">
CASE 4 - Eclipse Mosquitto on DB ICE Trains</h3>

<p>In the past, executing software changes and innovation on a train was difficult. Software and hardware are often bundled and therefore cannot be changed separately. Non-safety systems are often connected to safety relevant systems on the train. This meant that every change needed public authority approval, which made the process slow and resource intensive.</p>

<p>A new project called &ldquo;Variable Vehicle IT&rdquo; was successfully launched in early 2017. The project aims to create a clear separation between non-safety-related systems for customers and operative safety systems (train control, interlocking, etc.) on German high-speed trains. This will be achieved by creating a compute infrastructure as a service on the trains to enable digitization. The project uses Eclipse Mosquitto, a lightweight MQTT broker implementation. </p>

<p>By the end of spring 2017, this solution will be deployed on 256 trains. In this use case, Eclipse Mosquitto is used for message communication in the trains as well as message communication to the control center. Eventually the number of messages served with Mosquitto are expected to surpass the number sent using Eclipse Paho on the long-distance vehicles, which is 3,000 messages per day, per vehicle.</p>

<h2 class="purple">
    Future
</h2>

<p>Deutsche Bahn is always innovating to make their rail system more efficient and to add business value for passengers.</p>
<p>DB Systel sees three major changes with the Internet of Things in the near future: </p>

<ul>

<li>More and more &lsquo;&rsquo;Things&rsquo;&rsquo; will be deployed and connected in their system and replacing older equipment. </li>

<li>Operational technology (OT) is being replaced by informational technology (IT). This means that DB will be better equipped to respond to faster technology cycles and will have more agile and interoperable applications, but maintaining ongoing quality required for a train system will change significantly.</li>

<li>Lastly, DB is moving towards more horizontal data integration instead of the current vertical data structure. Bringing the passenger, location, and sensor data together, instead of keeping them apart, will allow for much more efficient systems. It will not only be beneficial for DB, but also for other railway systems and customers.</li>

<li>Lastly, DB foresees more open source integrations in the future and looks forward to collaborating within the Eclipse IoT Working Group. Being part of a collaboration like Eclipse IoT is a good opportunity to improve DB&rsquo;s use of open source technology, and in the long term creates better solutions for DB passengers.</li>

</ul>

<p>
Finally, DB foresees more open source integrations in the future and looks forward to collaborating within the Eclipse IoT Working Group. Being part of a collaboration like Eclipse IoT is a good opportunity to improve DB’s use of open source technology, and in the long term creates better solutions for DB passengers.
</p>

</div>
</div>