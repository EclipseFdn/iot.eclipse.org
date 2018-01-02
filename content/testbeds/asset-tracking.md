+++
weight = 1
title = "Asset Tracking"
date = "2017-03-08T10:48:55+01:00"
market_segment = [
    "transportation"
]

description = """
<p>The <strong>Asset Tracking Management</strong> testbed demonstrates how assets with various sensors can be tracked in real-time in order to minimize the cost of lost or damaged parcels.</p>
"""

sub_description = """
<p>Many high-value assets move through airports, railways, and via trucks. These assets need to be monitored in real-time for location and environmental conditions.</p>
<p>Check out how the Eclipse IoT Open Testbed for Asset Tracking is solving this problem.</p>
"""

demo_link = "https://iot.eclipse.org/testbeds/asset-tracking/demo"
source_code_link = "https://github.com/eclipselabs/eclipseiot-testbed-assettracking"

challenge =  """
<p>
    The overall cost of mishandled bags to the air transport industry was US$2.4 billion in 2014 [<a href=\"http://www.sita.aero/resources/type/surveys-reports/baggage-report-2015\" target=\"blank\">SITA - Baggage Report 2015</a>].<br/>
    A key concern for shipping companies is to be able to know when and where damage is taking place so that they can, overtime, learn from this data and minimize the number of damaged parcels.
</p>
<img src="/assets/images/testbeds/asset-tracking-value-proposition.png" class="img-responsive" style="margin-top: 3em;margin-bottom: 3em;">        
<p>
    Valuable parcels may be equipped with a removable sensor that can collect information such as temperature, humidity, or vibration levels during transit. However, the wide variety of environments that parcels go through, from planes, to airports to delivery trucks makes it particularly challenging to provide a solution that enables tracking in real-time.<br/>
    What's more, an efficient asset tracking solution should enable the implementation of alerts that, based on specific business rules, can let people in the field (e.g truck drivers) know when they need to perform given action (e.g drive slower!).</br>
    Finally, it might be desirable for a shipping company to not only use data collected on parcels internally (e.g to help prevent damages based on correlations found in certain datasets), but also to expose it to their customers, and raise their satisfaction level by means of providing live feedback and guarantees on how a package is being handled.   
</p>
"""

[[organizations]]
name = "redhat"
role = "Leveraging <strong>Red Hat</strong>’s OpenShift PaaS (Platform-as-a-Service), the Asset Tracking Management testbed can be deployed on virtually any cloud environment, as well as easily scale as the number of assets that need to be tracked grows.<br/>Apache Camel and Apache ActiveMQ, on which Red Hat JBoss Fuse is based, are also key components of the Testbed, providing MQTT messaging infrastructure, routing and integration capabilities."

[[organizations]]
name = "azul-systems"
role = "<strong>Azul Systems</strong> is contributing their Java and JVM expertise by enabling the edge gateways to run on Zulu Embedded, a 100% open source Java platform"

[[organizations]]
name = "codenvy"
role = "<strong>Codenvy</strong> provides world class tools that simplify developers’ lives by enabling on-demand, collaborative and constraint-free workspaces. Codenvy is contributing to the testbed by providing the Eclipse Che recipes needed to start developing extensions to the testbed in minutes. <br/>Organizations productizing IoT can white label Eclipse Che, or create an IoT focused multi-tenant cloud IDE derived from Codenvy's on-premises offering."

[[organizations]]
name = "eurotech"
role = "<strong>Eurotech</strong>’s industrial IoT gateways such as the ReliaGATE series are fully compatible with Eclipse Kura and provide a turnkey solution for deploying software at the edge that is fully compatible with the Eclipse Kapua-based cloud backend used in the testbed."

[[organizations]]
name = "samsung-artik"
role = "The <strong>Samsung</strong> ARTIK 5 family provides a powerful platform, with extensive connectivity options, to build the edge gateways featured in the Asset Tracking Management testbed."

[[benefits]]
title =  "Low-latency, Real-Time, Reliable Messaging"
content = "One of the challenges for efficiently tracking valuable assets is the ability to access information in real-time. The Asset Tracking Management testbed provides a scalable infrastructure based on a multi-tier architecture that allows information to be processed and analyzed both in the field and in the enterprise backend."

[[benefits]]
title = "Flexible Deployment Model"
content = "Building on state-of-the-art containerization technologies such as Java, OSGi, Linux Containers and Kubernetes through OpenShift, the edge intelligent gateway and cloud software stacks can run on a wide range of platforms and cloud environments, minimizing the solution’s deployment and operational costs in addition together with simplifying the integration with existing systems. The Eclipse Kura based gateway acts as an integration point for various sensor technologies such as Bluetooth Smart or RFID."

[[benefits]]
title = "Interoperability"
content = "By using messaging technologies such as MQTT through Apache ActiveMQ, the Asset Tracking Management testbed demonstrates how open standards enable interoperability across the different components of an IoT solution."

[[learn_more]]
name = "Samsung ARTIK"
link = "https://www.artik.io/"

[[learn_more]]
name = "Red Hat IoT"
link = "https://developers.redhat.com/iot/"

[[learn_more]]
name = "Zulu embedded"
link = "https://www.azul.com/products/zulu-embedded/"

[[learn_more]]
name = "Eurotech gateways"
link = "http://www.eurotech.com/en/products/devices/iot+gateways"

[[learn_more]]
name = "Codenvy Getting Started"
link = "https://codenvy.com/product/"

[[learn_more]]
name = "Access the source code"
link = "https://github.com/eclipselabs/eclipseiot-testbed-assettracking"
+++

<div class="row">
    <div class="col-md-12">
        <img src="/assets/images/testbeds/asset-tracking-architecture.png" class="img-responsive">        
    </div>
    <div class="col-md-12">
        <h3 class="purple">Leveraging Eclipse Kura for data acquisition and reliable connectivity</h3>

        <p>The <a href="https://eclipse.org/kura" target="_blank">Eclipse Kura</a> open source project is used to provide an easy-to-deploy edge computing stack that can run on virtually any IoT gateway device that would typically be found in airport baggage management systems or in a delivery truck.</p>
        <p>It is used for communicating with Bluetooth low energy sensors that are attached to valuable parcels that need to be tracked. As Kura provides built-in support for Bluetooth communication, it provides a great starting point for interfacing with the sensors in order to collect data such as temperature, humidity, vibration, etc.</p>
        <p>The Kura application is using the IoT cloud communication capabilities of the framework to periodically update sensor data to an Eclipse Kapua backend where the data will be consolidated, archived, and exposed to third-party applications. Eclipse Kura being agnostic of the cloud backend it is being connected to, it is important to note that the gateway could be connected to e.g AWS IoT, IBM Waton IoT or Microsoft Azure IoT Hub, and not just Eclipse Kapua.</p>


        <h3 class="purple">Eclipse Kapua and OpenShift at the heart of the backend system</h3>

        <p>The backend system for the Eclipse IoT Asset Tracking testbed is based on <a href="https://iot.eclipse.org/kapua" target="_blank">Eclipse Kapua</a>. Eclipse Kapua is a modular platform providing the services required to manage IoT gateways and smart edge devices.</p>

        <p>The Asset Tracking testbed features an Eclipse Kapua environment running on top of OpenShift, an open source application container platform, that provides a solid foundation for scaling the cloud backend should the number of assets to monitor grow substantially. As Eclipse Kapua is based on microservices, a typical example would be to create additional instances (pods) of the database service in order to handle better the amount of data generated by the assets/gateways on the field.</p>
   
        <h3 class="purple">Open APIs</h3>

        <p>Eclipse Kapua's REST API enables third parties to easily interact with field devices and their data. The Asset Tracking testbed showcases a web application built using the AngularJS framework and that uses Kapua's API to display sensor data in real-time, access consolidated historical data, send alerts in the field, etc.</p>
    </div>
    <div class="col-md-6 col-md-offset-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1VIDLuUucug" frameborder="0" allowfullscreen></iframe>
    </div>
</div>