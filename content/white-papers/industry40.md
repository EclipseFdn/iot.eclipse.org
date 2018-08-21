+++
date = "2017-10-11"
title = "Open Source Software for Industry 4.0"
seo_title = "White paper: Open Source Software for Industry 4.0"
link = "/white-paper-industry-40"
img = "/resources/white-papers/industry40.png"
description = "The purpose of this white paper is to identify the types of software required to implement an Industry 4.0 solution. Software is a key enabling technology for any IoT solution, including IoT in manufacturing. This white paper investigates how software solutions can be used to integrate existing operational technologies on a factory floor with the existing enterprise applications, like PLM and ERP solutions."
+++
<div id="_idContainer008" class="Bloc-de-texte-standard">
    <h1 class="purple">
        <a id="_idTextAnchor001"></a>Introduction</h1>
</div>
<div id="_idContainer010" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">
        The Internet of Things (IoT) represents a significant change and opportunity for the manufacturing industry.
        Technological advancements in connectivity and communication technology, real-time data analysis, and complex event
        processing have opened the possibility of integrating the traditional operational technology (OT) of a manufacturing
        plant with the enterprise information technology (IT) systems. This alignment of OT and IT in the manufacturing industry
        presents a huge opportunity for a more efficient manufacturing process, including tighter integration of the supply
        chain, preventive maintenance of the factory floor, and more flexibility to react to changing customer demands.</p>
    <p class="Body-Text_Body-Text---Justified">
        Smart Manufacturing, Industrie 4.0 or Industry 4.0 are terms often used to refer to the trend of bringing
        IoT technology to the manufacturing industry. (Note: We will be using the term “Industry 4.0” in this white paper.)
        There has been a significant amount of research and documentation on the importance and challenges of Industry 4.0.
        Key focuses for this research has been on the architecture required to bring together OT and IT in a complete system
        and the business opportunities made possible by Industry 4.0.</p>
    <p class="Body-Text_Body-Text---Justified">
        The purpose of this white paper is to identify the types of software required to implement an Industry 4.0
        solution. Software is a key enabling technology for any IoT solution, including IoT in manufacturing. This white
        paper will investigate how software solutions can be used to integrate existing operational technologies on a factory
        floor with the existing enterprise applications, like PLM and ERP solutions. </p>
    <p class="Body-Text_Body-Text---Justified">
        Finally, this white paper will identify how open source software can be used to implement Industry 4.0 solutions.
        Open source software has become a dominant provider of critical infrastructure technology for the general software
        industry. The open model of development and royalty-free distribution has proven to be an effective way to build
        production quality software. Industry 4.0 implementers can now use software from open source communities, like Eclipse
        IoT and Apache Software Foundation, to address the software requirements for production-ready Industry 4.0 solutions.</p>
</div>
<div id="_idContainer011" class="Bloc-de-texte-standard">
    <h1 class="purple">What is Industrie 4.0 and Smart Manufacturing?</h1>
</div>
<div id="_idContainer012" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">“<a href="http://www.plattform-i40.de/I40/Navigation/EN/Home/home.html"><span class="bold---brand1">Industrie 4.0</span></a>” is a term and concept created by the German Academy of Science and Engineering; it stands for and refers to the
        integration of industrial manufacturing and information technology based on cyber-physical systems, Internet of Things
        and Cloud Computing. </p>
    <p class="Body-Text_Body-Text---Justified">Industrie 4.0 enables and supports new scenarios in manufacturing where humans, machines, production lines, software
        systems, such as MES and ERP systems, and the products themselves communicate and cooperate with each other in real
        time to enable decentralized decision making and a self-organized production. </p>
    <p class="Body-Text_Body-Text---Justified">This approach includes all phases of the product lifecycle (product idea, development, production, usage, maintenance,
        and recycling) and all participants of the value chain (company-internal and -external, such as suppliers and customers)
        and thus allows a holistic optimization of the value chain.</p>
    <p class="Body-Text_Body-Text---Justified">
        <span class="CharOverride-6">Smart Manufacturing</span> is a general term often used to reference the modernization of the manufacturing process.
        </p>
    <p class="Body-Text_Body-Text---Justified">The Industrial Internet Consortium (IIC) has published a white paper titled “
        <a href="https://www.iiconsortium.org/pdf/Smart_Factory_Applications_in_Discrete_Mfg_white_paper_20170222.pdf">
            <span class="bold---brand1">Smart Factory Applications in Discrete Manufacturing</span>
        </a>” that documents many of the benefits of Smart Manufacturing.</p>
</div>
<div id="_idContainer013" class="Bloc-de-texte-standard">
    <h1 class="purple">Key Challenges for Implementing Industry 4.0</h1>
</div>
<div id="_idContainer014" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">There are a number of unique challenges that occur when implementing an IoT solution in the manufacturing industry. Understanding
        and addressing these challenges is important to the implementation of the solution.</p>
    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor002"></a>Integration of OT and IT</h2>
    <p class="Body-Text_Body-Text---Justified">Any solution for Industry 4.0 needs to address the issues both from an OT and IT perspective. The integration of OT and
        enterprise IT technologies creates the opportunity to achieve the benefits of Industry 4.0. </p>
    <p class="Body-Text_Body-Text---Justified">However, OT and IT have different priorities on how they adopt and manage technology. Operation technology is often focused
        on safety, efficiency, and continuity of the manufacturing process. Downtime and ‘bugs’ represent significant costs
        and disruptions to an operation. Enterprise IT is often focused on speed of execution, security of digital resources,
        and analysis of data/information. </p>
    <h2 class="purple Titles_Headings_Heading4">Greenfield vs. Brownfield</h2>
    <p class="Body-Text_Body-Text---Justified">The bulk of Smart Manufacturing/Industry 4.0 implementations will be into existing manufacturing operations. Existing
        operations have equipment that might not be network enabled or open to modern software technologies. </p>
    <p class="Body-Text_Body-Text---Justified">Moreover, the lifecycle of manufacturing machines may extend to 40 years which means a greenfield approach is not always
        a viable option. Different approaches might be required for
        <span class="CharOverride-7">brownfield</span> vs.
        <span class="CharOverride-7">greenfield</span> implementations.</p>
    <h2 class="purple Titles_Headings_Heading4">Safety and Security Concerns</h2>
    <p class="Body-Text_Body-Text---Justified">Safety and security are significant concerns for the manufacturing industry. Security breaches could lead to personal
        safety issues for factory workers. </p>
    <p class="Body-Text_Body-Text---Justified">Additionally, OT and IT often have different safety and security concerns and policies that might be conflicting or create
        invisible gaps. Government regulations also influence when and how technology can be introduced into a manufacturing
        process. </p>
    <p class="Body-Text_Body-Text---Justified">Any Industry 4.0 implementation will be expected to conform to existing regulations and address the potential for security
        vulnerabilities.</p>
    <h2 class="purple Titles_Headings_Heading4">Availability and Continuity of Services</h2>
    <p class="Body-Text_Body-Text---Justified">For many manufacturing processes, continuous operation is of critical importance. Therefore, any additional IT services
        that are made part of a manufacturing process must be engineered for high-availability and be fault tolerant to ensure
        continuity of service.</p>
    <h2 class="purple Titles_Headings_Heading4">Importance of Real Time</h2>
    <p class="Body-Text_Body-Text---Justified">To meet the demands of the manufacturing processes many Industry 4.0 solutions will require real-time data and event
        processing. Delays in any data analysis or events could have adverse effects on the manufacturing process.</p>
    <h2 class="purple Titles_Headings_Heading4">Creating a More Flexible Manufacturing Processes</h2>
    <p class="Body-Text_Body-Text---Justified">A key driver for Industry 4.0 implementations is to create a manufacturing process that can adapt more easily to customer
        demand. Current processes are often monolithic and very cumbersome to change, so it is difficult to alter what is
        being produced by the production line. The ideal scenario is a highly flexible system that can support a production
        line that produces just one unit, sometimes called ‘‘lot size 1”.</p>
    <p class="Body-Text_Body-Text---Justified">More flexible processes create a need for more distributed systems that are configurable and interoperable. This requires
        the implementations of open standards for the technical and semantic interchange of information that flows through
        the system. </p>
</div>
<div id="_idContainer015" class="Bloc-de-texte-standard">
    <h1 class="purple">Software Implementation Scenarios for Industry 4.0</h1>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer019" class="_idGenObjectStyleOverride-1">
    </div>
</div>
<div id="_idContainer020" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">The most common implementation architecture for IoT solutions has three tiers: </p>
    <ol>
        <li class="Body-Text_Special-Body-Text_Numbered-List">Constrained devices, </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">Smart devices/gateways, and </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">IoT platforms. </li>
    </ol>
    <p class="Body-Text_Body-Text---Justified">This typical architecture has been documented in <a href="/white-paper-iot-architectures" class="bold---brand1">“The Three Software Stacks Required for IoT Architectures</a>” white paper.
        Industry 4.0 implementations typically follow this general 3-tier architecture, but introduce some unique challenges
        and features for software implementations.</p>

        <img class="img-responsive" src="/resources/white-papers/industry40/image/Open-Source-for-Industry-4.0.png"
            alt="" style="max-width: 85%; margin:0 auto;"/>


        <h2 class="purple Titles_Headings_Heading4">Connecting Industrial IoT Devices</h2>
    <p class="Body-Text_Body-Text---Justified">The ‘devices’ in an Industry 4.0 implementation are typically programmable logic controllers (PLC) that control the sensors
        and actuators of a machine on a factory floor. Many PLCs have limited processing capabilities and network connectivity.
        The software running on these types of PLCs is embedded in the firmware and difficult to modernize or update. </p>
    <p class="Body-Text_Body-Text---Justified">For greenfield Industry 4.0 implementations, new modern PLCs are network enabled and can support connecting the IoT devices.
        Similarly, more advanced sensors and actuators now have the ability to directly send and receive data. </p>
    <p class="Body-Text_Body-Text---Justified">For brownfield implementations, an IoT gateway is often introduced to aggregate the data from a group of PLCs and provide
        the data to the IT systems. Existing PLCs often implement proprietary protocols that need to be supported by gateways
        and transformed into a consistent message and data format. An IoT gateway allows to retrofit existing machines providing
        interfacing towards the field and connectivity towards the remote servers while minimizing the impact into existing
        operations.</p>
    <h2 class="purple Titles_Headings_Heading4">Edge vs. Cloud Hosting of IoT Platform</h2>
    <p class="Body-Text_Body-Text---Justified">Due to safety, availability, security, and data privacy concerns, Industry 4.0 solutions will often require local processing
        of data at the edge versus central processing of data in the cloud. In some approaches, edge processing is provided
        at the IoT gateway. </p>
    <p class="Body-Text_Body-Text---Justified">For instance, in predictive maintenance applications, the latency requirement, and the volume of data acquired may be
        prohibitive and edge analytics is the only viable option. In other scenarios, the deployment of an IoT platform within
        a factory or even distributed within a factory can help to ensure data aggregation at the site level, while providing
        availability and near real-time analysis of events and data. In other situations, data analysis will be dependent
        upon data aggregation performed outside of the factory, so centralized data analysis will be required. </p>
    <h2 class="purple Titles_Headings_Heading4">Integration with Enterprise IT</h2>
    <p class="Body-Text_Body-Text---Justified">A key aspect of an Industry 4.0 system is the integration of the OT with the enterprise IT systems. In fact, most Industry
        4.0 implementations will need to integrate with existing SCM, PLM, MES and/or ERP systems. To achieve this level
        of integration, the OT data will need to be filtered, aggregated and normalized for IT integration. Similarly, large-scale
        event processing becomes a key component to successful Enterprise IT integration.</p>
</div>
<div id="_idContainer021" class="Bloc-de-texte-standard">
    <h1 class="purple">Key Software Features for Industry 4.0</h1>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer022" class="_idGenObjectStyleOverride-2">
    </div>
</div>
<div id="_idContainer023" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">The saying ‘Software is Eating the World’ is applicable to Industry 4.0 and IoT in general. Software has become a pervasive
        enabling technology in almost every industry. In Industry 4.0, software provides the flexibility to address many
        of the previous issues and enables many of the benefits derived from Industry 4.0 implementations.</p>
    <p class="Body-Text_Body-Text---Justified">Each Industry 4.0 implementation will have unique requirements, but there is a set of key software features that will
        be required for any successful deployment, including:</p>
    <h2 class="purple Titles_Headings_Heading4">Data aggregation</h2>
    <p class="Body-Text_Body-Text---Justified">Being able to acquire the data from the factory floor and to perform some level of analysis is central for any Industry
        4.0 system. The data collection is typically focused on aggregating raw data from different endpoints, then filtering
        and/or processing the raw data so that it is available for real-time or batch analysis. </p>
    <p class="Body-Text_Body-Text---Justified">To accomplish data aggregation and analysis the following is required:</p>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Digitalization of analog data from the factory floor and communicating this data to the network using standard protocols
            like MQTT, OPC-UA or HTTP(S). This can be accomplished via PLCs that are network enabled, or by adding IoT
            gateways that connect the PLCs to the network</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Formatting the data using open standards, like OPC-UA, PPMP, PackML</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Defining and sharing of semantic information to allow for easier analysis across different systems.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Filtering data at the edge so only relevant information is sent to the network. This can be accomplished through
            programmatic PLC or IoT gateways.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Data storage at the edge and in the cloud.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">Ability to store and forward data as well as compression and schedule transfers to enable OT data will eventually
            be made available to IT and to the enterprise and data scientists for longer term analysis including training
            predictive models. </li>
    </ul>
    <h2 class="purple Titles_Headings_Heading4">Security</h2>
    <p class="Body-Text_Body-Text---Justified">Security is a key concern for an IoT system, especially for Industry 4.0 implementations. Remote network access to factory
        equipment introduces safety and privacy concerns. Therefore, security features like device authentication, role-based
        access control, encryption of data and software updates need to be considered.</p>
    <h2 class="purple Titles_Headings_Heading4">Device Management</h2>
    <p class="Body-Text_Body-Text---Justified">Remote device management is required for any large-scale implementation. Relying upon manual updates on the factory floor
        is prone to errors, time consuming and costly. Device management for industrial IoT devices should include initial
        setup and configuration, health check of device, software update and deactivation. </p>
    <h2 class="purple Titles_Headings_Heading4">Event Management and Data Analysis</h2>
    <p class="Body-Text_Body-Text---Justified">Industry 4.0 implementations will generate a tremendous amount of data and events. For data management, software will
        be required to filter this data at the edge, provide real-time analytics at the edge and cloud, provide batch-oriented
        analytics and data storage. For event management, software will be required for event routing, processing and handling
        at the edge.</p>
    <h2 class="purple Titles_Headings_Heading4">Digital Twin Management</h2>
    <p class="Body-Text_Body-Text---Justified">Creating a digital representation of a physical asset is often referred to as a ‘digital twin’. Creating a digital twin
        allows for easier integration of data analysis, machine learning and monitoring that can be directly tied to the
        physical asset. Digital twins also enable simulation of future scenarios that can help with planning and preventive
        maintenance.</p>
    <p class="Body-Text_Body-Text---Justified">The software required to manage digital twins includes the tools required to create and model a twin, APIs and runtimes
        to interact with a digital twin, and administration consoles to manage the lifecycle of a digital twin collection.</p>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer049">
        <div id="_idContainer024" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer025" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer026" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer027" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer028" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer029" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer030" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer031" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer032" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer033" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer034" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer035" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer036" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer037" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer038" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer039" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer040" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer041" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer042" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer043" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer044" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer045" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer046" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer047" class="_idGenObjectStyleOverride-3">
        </div>
        <div id="_idContainer048" class="_idGenObjectStyleOverride-3">
        </div>
    </div>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer068">
        <div id="_idContainer050" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer051" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer052" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer053" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer054" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer055" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer056" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer057" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer058" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer059" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer060" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer061" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer062" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer063" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer064" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer065" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer066" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer067" class="_idGenObjectStyleOverride-4">
        </div>
    </div>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer069" class="_idGenObjectStyleOverride-2">
    </div>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer073">
        <div id="_idContainer070" class="_idGenObjectStyleOverride-5">
        </div>
        <div id="_idContainer071" class="_idGenObjectStyleOverride-5">
        </div>
        <div id="_idContainer072" class="_idGenObjectStyleOverride-5">
        </div>
    </div>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer076">
        <div id="_idContainer074" class="_idGenObjectStyleOverride-4">
        </div>
        <div id="_idContainer075" class="_idGenObjectStyleOverride-4">
        </div>
    </div>
</div>
<div id="_idContainer077" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">Open Source Software for Industry 4.0</h1>
</div>
<div id="_idContainer078" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">Software might be eating the world, but open source software has become a pervasive supplier of technology to the software
        industry. Open source projects like Linux, Apache httpd, Apache Hadoop, Eclipse IDE, and many others have attained
        significant adoption for their specific technology. Open source software has proven to be a safe, reliable source
        of production quality software for many industries.</p>
    <p class="Body-Text_Body-Text---Justified">The reason open source software has been so successful is that it provides users with flexibility to choose the technology
        best suited for their needs without being tied to a particular vendor solution. The license-free and royalty-free
        nature of open source software reduces the capital costs of creating new solutions. And finally the open development
        of well-run open source projects allows many different organization to participate in the quality control and future
        development of the technology. </p>
    <p class="Body-Text_Body-Text---Justified">There are many open source projects that provide technology specifically suited for Industry 4.0 applications. The Eclipse
        IoT Working Group has 28 projects that target general IoT solutions, some being applicable to Industry 4.0. Other
        open source communities like the Apache Software Foundation and the Linux Foundation, among others, also have technology
        relevant to Industry 4.0. The following sections identify potential open source technologies that can be used for
        Industry 4.0 solutions.</p>
    <h2 class="purple Titles_Headings_Heading4">Data Aggregation</h2>

    <h3>Open Standards</h3>
            <p class="Body-Text_Body-Text---Justified">Open standards for Industry 4.0 allow for solutions that are interoperable, modular and vendor independent. The
                following relevant standards are supported through different open source projects: </p>
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">OPC-UA -
                    <a href="https://eclipse.org/milo">
                        <span class="bold---brand1">Eclipse Milo</span>
                    </a> is a full implementation of OPC-UA. Written in Java it provides a client and server implementation
                    of the standard.
                    <br />open62541 (open62541.org) is a C stack implementation of OPC-UA under the Mozilla Public License
                    (MPL). The OPC Foundation also provides Java implementation of OPC-UA under the GPL license for
                    non-members.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">MQTT -
                    <a href="https://eclipse.org/paho">
                        <span class="bold---brand1">Eclipse Paho</span>
                    </a> and
                    <a href="https://eclipse.org/mosquitto">
                        <span class="bold---brand1">Eclipse Mosquitto</span>
                    </a> provide a client and broker implementation of the MQTT messaging protocol. Mosquitto implements an MQTT
                    server in C and Paho provides MQTT clients in a variety of language implementations, including C, C++,
                    Java, JavaScript, Python, etc.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">PPMP - Production Performance Management Protocol (PPMP) is a payload specification to capture data that
                    is required to do performance analysis of production facilities.
                    <a href="https://eclipse.org/unide">
                        <span class="bold---brand1">Eclipse Unide</span>
                    </a> is an open source project that maintains the PPMP specification and provides an SDK for PPMP</li>
                <li
                    class="Body-Text_Special-Body-Text_Bullet-List">oneM2M – oneM2M is a service layer standard that defines common service functions that can be shared by applications,
                    gateways, and devices. The industry domain enablement work item in oneM2M defines methods of using oneM2M
                    resource structure to fulfil industry requirements. oneM2M has also defined interworking with standards
                    such as OSGi, DDS, OPC-UA, and Modbus so that industrial data can be aggregated and exposed to applications
                    uniformly.
                    <a href="https://eclipse.org/om2m">
                        <span class="bold---brand1">Eclipse OM2M</span>
                    </a> provides an implementation of oneM2M IN (infrastructure node - platform), MN (middle node - gateway),
                    ASN (application service node - devices), as well as IPE (interworking proxy entity) that can be used
                    for interworking with heterogeneous protocols.</li>
            </ul>
        <h3>PLC Development</h3>
            <p class="Body-Text_Body-Text---Justified">Traditionally PLC development has been closed and proprietary. New standards, specifically IEC 61499, are being
                implemented to support a new generation of PLCs that enable distributed control.
                <a href="https://eclipse.org/4diac">
                    <span class="bold---brand1">Eclipse 4diac</span>
                </a>
                <span class="bold---brand1"> </span>provides the development tools and the runtime to create control systems for PLCs that is based on
                IEC 61499. 4diac also integrates OPC-UA and MQTT into PLC to ease PLC connectivity.</p>

            <h3>IoT Gateway</h3>

            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kura">
                    <span class="bold---brand1">Eclipse Kura</span>
                </a> provides a portable Java/OSGi edge computing framework for building IoT Gateways that can be deployed into
                Industry 4.0 solutions. </p>
            <p class="Body-Text_Body-Text---Justified">Kura supports a wide variety of fieldbus protocols like OPC-UA, Siemens S7, and Modbus, simplifying the
                steps needed to interact with PLCs and sensors. Java APIs for Bluetooth 2.1, BLE, GPS, serial communication
                and GPIO/SPI/I2C interaction complete the set of out-of-the-box features for sensors and end-devices integration
                capabilities. </p>
            <p class="Body-Text_Body-Text---Justified">Eclipse Kura also features a modular and visual data flow programming tool called Wires. Wires allows to define
                data collection and processing pipelines at the edge by simply selecting components from a palette and wiring
                them together. </p>
            <p class="Body-Text_Body-Text---Justified">The Eclipse Kura distribution is completed by an easy to use Web UI, firewall and network management capabilities,
                integration of a full SQL database, simultaneous multi-cloud connections with built-in support for the leading
                IoT cloud platforms.</p>
            <h2 class="purple Titles_Headings_Heading4">Security</h2>
        </li>
        <h3>
            Code signing
        </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kura">
                    <span class="bold---brand1">Eclipse Kura</span>
                </a> supports the remote deployment of signed code to an IoT Gateway. This ensures the integrity and provenance
                of the code deployed in factory floors. </p>

                <h3>
                    Device Authentication
                </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/leshan">
                    <span class="bold---brand1">Eclipse Leshan</span>
                </a> is an implementation of the LWM2M device management protocol. LWM2M supports device authentication and authorization.</p>
        
       <h3>
           Access Control
       </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/keti">
                    <span class="bold---brand1">Eclipse Keti</span>
                </a> provides an access control service that protects RESTful APIs, so that only authorized parties can manipulate
                sensitive information or data.</p>
        
                <h2 class="purple Titles_Headings_Heading4">Device Management</h2>
        
        
                <h3>
                    Device Management and Configuration
                </h3>
            <p class="Body-Text_Body-Text---Justified">OMA LWM2M - Lightweight M2M (LWM2M) is a device management protocol from OMA.
                <a href="https://eclipse.org/leshan">
                    <span class="bold---brand1">Eclipse Leshan</span>
                </a> is a Java implementation of LWM2M and
                <a href="https://eclipse.org/wakaama">
                    <span class="bold---brand1">Eclipse Wakaama</span>
                </a> is a C implementation.</p>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kapua">
                    <span class="bold---brand1">Eclipse Kapua</span>
                </a> is a modular integration platform for IoT devices and smart sensors that focuses on providing comprehensive
                management of edge IoT nodes including their connectivity, configuration, and application cle. Kapua device
                management offers the ability to introspect device configuration, update device applications and firmware,
                and control the device remotely. </p>

                <h3>
                    Software Update
                </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/hawkbit">
                    <span class="bold---brand1">Eclipse hawkBit</span>
                </a> provides back-end framework for rolling out software updates to constrained edge devices, as well as more
                powerful controllers and gateways connected to IP-based networking infrastructure.</p>
            <h2 class="purple Titles_Headings_Heading4">Event Management and Data Analysis</h2>

            <h3>
                Event Management
            </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/hono">
                    <span class="bold---brand1">Eclipse Hono</span>
                </a> provides remote service interfaces for connecting large numbers of IoT devices to a back end and interacting
                with them in a uniform way regardless of the device communication protocol. Hono provides a scalable and
                secure ingestion of sensor data and transforms the data into consistent events that can be integrated into
                enterprise IT systems. </p>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kapua">
                    <span class="bold---brand1">Eclipse Kapua</span>
                </a> provides a modular IoT platform for managing and integrating IoT data and events. Kapua enables easier IT
                integration through a message routing service and REST API. This provides a consistent set of APIs to enable
                OT and IT integration.</p>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/vertx">
                    <span class="bold---brand1">Eclipse Vert.x</span>
                </a> provides an event processing framework that handles large amounts of concurrent events which is typical of
                IoT systems. Vert.x is built on the Java Virtual Machine but supports many languages, such as JavaScript,
                Groovy, Ruby, Ceylon, Scala and Java.</p>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://spark.apache.org/">
                    <span class="bold---brand1">Apache Spark</span>
                </a> is a fast, general purpose data processing framework that is highly scalable for IoT systems. Applications
                running on Spark can be written in Java, Scala, Python and R.</p>


                <h3>
                    Data Storage
                </h3>
            <p class="Body-Text_Body-Text---Justified">
                <span class="bold---brand1">Apache Hadoop</span> enables distributed and scalable storage of large amounts of data by making use of computer
                clusters built from commodity hardware.</p>
            <p class="Body-Text_Body-Text---Justified">
                <span class="bold---brand1">Apache HDFS</span> is a component within the Hadoop family that enables highly scalable storage of any form
                of data, both structured and unstructured. It is highly redundant and highly scalable. It is very suitable
                for large scale batch storage.</p>
            <p class="Body-Text_Body-Text---Justified">
                <span class="bold---brand1">Apache Kudu</span> is another storage component within the Hadoop family that is optimized for fast analytics
                and storage of fast data. This makes it ideal for storing and analyzing IoT data in either the OT or IT environments.
                It is columnar in nature, inherently distributed and scalable, and deals well with relational database patterns
                including frequent updates. </p>
            <p class="Body-Text_Body-Text---Justified">
                <span class="bold---brand1">Apache HBase</span> is a component that builds on HDFS with additional NoSQL storage capabilities. Like HDFS,
                it can store structured and unstructured data, and is suitable for high speed writes and reads. </p>

            <h3>
                Data Management
            </h3>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kapua">
                    <span class="bold---brand1">Eclipse Kapua</span>
                </a> provides a microservice to store and manage the data from an Industry 4.0 applications. Kapua provides a
                consistent API that allows for easy data analysis across applications and integration into existing enterprise
                IT system. The default data store for Kapua is ElasticSearch but other NoSQL and SQL data stores can be used.</p>


            <h2
                class="Titles_Headings_Heading4">Digital Twin</h2>
            <p class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/ditto">
                    <span class="bold---brand1">Eclipse Ditto</span>
                </a> is a framework to create and manage digital twins. Ditto exposes a unified resource-based API that can be
                used to interact with devices, abstracting from the complexity of different device types and how they are
                connected. It helps to structure the devices into their distinct aspects of functionality and can optionally
                enforce data types and data validation based on a formal device meta model, based on Eclipse Vorto.</p>
            <p
                class="Body-Text_Body-Text---Justified">
                <a href="https://eclipse.org/kura">
                    <span class="bold---brand1">Eclipse Kura</span>
                </a> provides open APIs in REST and Java, and an MQTT-based communication layer, that can be leveraged to interact
                with field devices and assets. Kura drivers provide a hardware abstraction layer that reduces the device
                interaction complexity and simplifies the communication with the devices attached to the gateway. The MQTT
                and REST APIs that Kura exposes for each device attached to a gateway allows to perform on-demand, remote,
                read and write operations, and provide a digital twin interface to those devices.</p>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer089" class="_idGenObjectStyleOverride-1">
        <img class="img-responsive" src="/resources/white-papers/industry40/image/i4.0-software-landscape.png"
            alt="" style="max-width: 85%; margin:0 auto;"/>
    </div>
</div>
<div id="_idContainer090" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor003"></a>Conclusion</h1>
</div>
<div id="_idContainer091" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">Industry 4.0 is set to revolutionize the manufacturing industry. The potential for more flexible manufacturing, more
        efficient processes and lower costs are the driving factors behind the investment in Industry 4.0 solutions. A key
        part in creating successful Industry 4.0 solutions will be software on the factory floor and in the cloud.</p>
    <p class="Body-Text_Body-Text---Justified">In this white paper we have identified the software requirements critical to any Industry 4.0 implementation. Solution
        architects will be best to understand how each of these requirements: Data Aggregation, Security, Device Management,
        Events Management and Data Analysis, and Digital Twin Management will be addressed in their Industry 4.0 solution.
        </p>
    <p class="Body-Text_Body-Text---Justified">Open source software has become a trusted source of technology for the enterprise IT software industry. The Eclipse IoT
        open source community and other open source communities are now ready to provide production ready technology for
        the manufacturing industry and Industry 4.0. Open source software will provide the key building blocks that will
        promote interoperability and flexibility that are required by Industry 4.0 solutions.</p>
    <p class="Body-Text_Body-Text---Justified">The Eclipse IoT community includes leading organizations from IT and OT. The community has been providing the general
        IoT industry open source technology for the last 6 years , and is also working on open testbeds that demonstrate
        how this technology can be used together with commercial offerings to build Industry 4.0 solutions.
        <br />We invite you to discover the technology available and participate in the community. Join us at
        <a href="https://iot.eclipse.org">
            <span class="bold---brand1">https://iot.eclipse.org</span>
        </a>. </p>
</div>
<div id="_idContainer092" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">Appendix: References</h1>
</div>
<div id="_idContainer093" class="Bloc-de-texte-standard">
    <h2 class="purple Titles_Headings_Heading4">Industrie 4.0</h2>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="http://www.plattform-i40.de/I40/Navigation/EN/Home/home.html">
                <span class="bold---brand1">Website of Plattform Industrie 4.0</span>
            </a> (with a comprehensive online library) —
            <span class="CharOverride-7">http://www.plattform-i40.de/I40/Navigation/EN/Home/home.html</span>
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="http://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/aspects-of-the-research-roadmap.pdf">
                <span class="bold---brand1">Industrie 4.0 scenarios</span>
            </a> —
            <span class="CharOverride-7">http://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/aspects-of-the-research-roadmap.pdf</span>
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/rami40-an-introduction.pdf">
                <span class="bold---brand1">RAMI4.0 - An Introduction — https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/rami40-an-introduction.pdf</span>
            </a>
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/structure-of-the-administration-shell.pdf">
                <span class="bold---brand1">Working Paper: Structure of the Industrie 4.0 Administration Shell</span>
            </a> —
            <span class="CharOverride-7">https://www.plattform-i40.de/I40/Redaktion/EN/Downloads/Publikation/structure-of-the-administration-shell.pdf</span>
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="https://www.zvei.org/fileadmin/user_upload/Themen/Industrie_4.0/Das_Referenzarchitekturmodell_RAMI_4.0_und_die_Industrie_4.0-Komponente/pdf/ZVEI-Industrie-40-Component-English.pdf">
                <span class="bold---brand1">The Industrie 4.0 Component — https://www.zvei.org/fileadmin/user_upload/Themen/Industrie_4.0/Das_Referenzarchitekturmodell_RAMI_4.0_und_die_Industrie_4.0-Komponente/pdf/ZVEI-Industrie-40-Component-English.pdf</span>
            </a>
        </li>
    </ul>
    <h2 class="purple Titles_Headings_Heading4">Smart Manufacturing
        <span class="CharOverride-8"> </span>
    </h2>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <a href="http://www.iiconsortium.org/pdf/Smart_Factory_Applications_in_Discrete_Mfg_white_paper_20170222.pdf">
                <span class="bold---brand1">IIC White Paper – Smart Factory Applications in Discrete Manufacturing</span>
            </a> —
            <span class="CharOverride-7">http://www.iiconsortium.org/pdf/Smart_Factory_Applications_in_Discrete_Mfg_white_paper_20170222.pdf</span>
        </li>
    </ul>
</div>