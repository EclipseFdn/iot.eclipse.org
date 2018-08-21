+++
date = "2015-12-22"
title = "Building Virtual Power Plants"
seo_title = "Case Study: Building Virtual Power Plants"
link = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20OmSense.pdf"
img = "/resources/case-studies/Eclipse%20IoT%20Success%20Story%20-%20OmSense.png"
company = "OmSense"
description = "The market has a lot of raw data coming from smart PDUs, but they need a software layer on top of that data to make it useful"
+++
<div class="row">
    <div class="col-md-12">
        <h2 class="purple">
            The Business Application – Monitoring Industrial Power Distribution
        </h2>

        <p>Kevin Read and his father, John Read, have a background in energy data monitoring and noticed a market need a few years ago.  Large data centers worldwide are using rack-mountable power distribution units (PDUs) to control and monitor electrical power in the data center.  These smart PDUs measure the power consumption of each device plugged into the socket, along with temperature, humidity and other environmental factors. However, most data centers are not optimizing these smart PDUs with a backend system for reading, storing and analyzing the valuable data.</p>

        <p>“The market has a lot of raw data coming from smart PDUs, but they need a software layer on top of that data to make it useful,” said Kevin.  “With a software tool for making the data accessible, data centers could save time and money on maintenance while analyzing power consumption for optimizing business practices. When we realized the demand we created OmSense.”</p>

        <p>OmSense is a family of products to monitor and manage industrial sensors. Most of these sensors are found in computer centers or production environments with large energy requirements.  As Kevin and John developed the product they wanted it to come preinstalled on industrial hardware, with the ability to be up-and-running within minutes of installation</p>

        <h2 class="purple">
            The Open Source Framework for IoT - Eclipse Kura
        </h2>

        <p>Keeping in mind the desire to allow customers to install OmSense and immediately begin to collect PDU data, John and Kevin found a gateway hardware solution that pointed them towards the Eclipse Kura project as the industrial standard for IoT software. Eclipse Kura is an open source smart application container that enables remote management of such gateways and provides a wide range of APIs that allow OmSense to write their own IoT application.  Kura runs on top of the Java Virtual Machine (JVM) and leverages OSGi, a dynamic component system for Java, to simplify the process of writing reusable software building blocks.</p>

        <p>Kevin has a background in Java development and a lot of confidence in using OSGi for an industrial environment, which led him to embrace the Eclipse Kura project for OmSense.  “We feel using Kura will guarantee future extensibility and compatibility to other products,” says Kevin.  “By basing OmSense on Kura, we can provide the optimal basis for integration into any industrial environment.”</p>

        <p>OmSense chose to use Kura for several specific reasons, including modularity, distributed design and remote administration.  The OSGi architecture provides the basis for a modular design. The design adds to OmSense stability and provides a good basis for feature expansion when requests are made to monitor data from new products.</p>
        
        <p>OmSense was designed from the ground up with a distributed concept. The data is intelligently collected in OmSense devices, and then sent via industry standard queuing mechanism (MQTT) to the OmSense concentrator. Data from different OmSense devices are stored and analyzed, which provides a complete picture that can only be made available when data from various sources is simultaneously analyzed and displayed.</p>
        
        <p>The industry-based design of Eclipse Kura provides a platform in which remote administration is possible. After the customer administrator enables this function, OmSense will automatically enroll at the administration center, allowing them to give advanced remote support. This support can even include the remote installation of new features. No security changes are needed at the customer site to provide this support.</p>

        <h2 class="purple">
            Results – A Commitment to Open Source Technology
        </h2>

        <p>OmSense engineers and business development people all had experience with open source and had no qualms about adopting open source technology.  Kevin feels it helps when they talk to prospective clients, since as a start up clients know their solution can continue to work no matter what.</p>

        <p>OmSense likes using open source technology because they have access and control.  For instance, they used their own configuration webpage, which Kura can work with easily. Since the architecture is based on industry standard concepts, it allows for excellent connectivity with other systems, and a good development basis for future features.</p>

        <p>Kevin and his colleagues have been very happy using Kura, and they have contributed a few small patches back to the project. “The Kura support was excellent, since we are talking to the developers working on it. The power of open source is getting high quality information and feedback. If something goes wrong you might get a fix in the next release.”</p>


    </div>
</div>