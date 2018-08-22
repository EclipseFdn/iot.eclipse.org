+++
date = "2016-10-01"
title = "The Three Software Stacks Required for IoT Architectures"
seo_title = "White paper: The Three Software Stacks Required for IoT Architectures"
link = "/white-paper-iot-architectures"
img = "/resources/white-papers/iot-architectures.png"
description = "In this white paper we look at the new technology requirements and architectures required for IoT solutions. It identifies three stacks of software required by any IoT solution and presents how open source communities, such as the Eclipse IoT community, are already supplying the critical software technology needed by IoT solution providers."
+++
<div id="_idContainer007" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor001"></a>Introduction</h1>
</div>
<div id="_idContainer013" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">The Internet of Things (IoT) is transforming how individuals and organizations connect with customers, suppliers, partners,
        and other individuals. IoT is all about connecting sensors, actuators, and devices to a network and enabling the
        collection, exchange, and analysis of generated information. </p>
    <p class="Body-Text_Body-Text---Justified">Hardware innovations, like the Raspberry Pi, are making it easier, faster and cheaper to develop new devices. Networking
        standards for low power networks, like LoRaWAN or NB-IOT, create new opportunities for connecting very small devices
        to a network. New standards are being developed specifically for IoT use cases, like MQTT for messaging, OMA Lightweight
        M2M for device management, or W3C Web of Things and oneM2M for service interoperability. And finally, significant
        improvements in data storage, data analysis, and event processing are making it possible to support the amount of
        data generated in large-scale IoT deployments.</p>
    <p class="Body-Text_Body-Text---Justified">In parallel to the emerging IoT industry, the general software industry has moved towards open source as being a key
        supplier of critical software components. The phrase “software is eating the world” reflects the importance of software
        in general, but in reality the software industry is now dominated by open source. This is true for key software categories,
        including Operating Systems (Linux), Big Data (Apache Hadoop, Apache Cassandra), Middleware (Apache HTTP Server,
        Apache Tomcat, Eclipse Jetty), Cloud (OpenStack, Cloud Foundry, Kubernetes), and Microservices (Docker).</p>
    <p class="Body-Text_Body-Text---Justified">The purpose of this white paper is to look at the new technology requirements and architectures required for IoT solutions.
        It will identify three stacks of software required by any IoT solution, and finally present how open source communities,
        such as the Eclipse IoT community, are already supplying the critical software technology needed by IoT solution
        providers. Similar to how the LAMP (Linux/Apache HTTP Server/MySQL/PHP) stack has dominated the web infrastructures,
        it is believed a similar open source stack will dominate IoT deployments.</p>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer014" class="Text-Objects-Styles_2-Column-Text-Frame _idGenObjectStyleOverride-2">
    </div>
</div>
<!-- <div id="_idContainer015" class="Bloc-de-texte-standard">
    <p class="Titles_Main-Title-WHITE-Negative ParaOverride-1">IoT Architectures</p>
    <p class="Titles_Subtitle-White-Negative ParaOverride-1">Devices, Gateways, and IoT Platforms</p>
</div> -->
<div id="_idContainer016" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor002"></a>IoT Architectures</h1>
</div>

<div id="_idContainer027" class="Bloc-de-texte-standard">
    <blockquote>
        <p class="Editorial-Impressum_Editor-s-Text _idGenParaOverride-1">A typical IoT solution is characterized by many
            <span class="CharOverride-6">devices</span> (i.e. things) that may use some form of
            <span class="CharOverride-6">gateway</span> to communicate through a network to an enterprise back-end server that is running an
            <span class="CharOverride-6">IoT platform</span> that helps integrate the IoT information into the existing enterprise. The roles of the devices,
            gateways, and cloud platform are well defined, and each of them provides specific features and functionality
            required by any robust IoT solution. </p>
    </blockquote>

    <img class="img-responsive center" src="/resources/white-papers/iot-architectures/image/IoT-arch.png" alt="" style="max-width: 85%; margin:0 auto;"
    />


    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor003"></a>Stack for Constrained Devices: Sensors and Actuators</h2>
    <p class="Body-Text_Body-Text---Justified">The “Thing” in the IoT is the starting point for an IoT solution. It is typically the originator of the data, and it
        interacts with the physical world. Things are often very constrained in terms of size or power supply; therefore,
        they are often programmed using microcontrollers (MCU) that have very limited capabilities. The microcontrollers
        powering IoT devices are specialized for a specific task and are designed for mass production and low cost.</p>
    <div id="_idContainer018">
        <img class="img-responsive" src="/resources/white-papers/iot-architectures/image/schema-archi2-02.png" alt="" style="max-width: 60%; margin:0 auto;" />
    </div>
    <div id="_idContainer019" class="Bloc-de-texte-standard">
        <p class="Specials_Foreword-or-sidetext">
            <div class="CharOverride-7" style="text-align: center; font-style: italic; font-size: .9em;">Software stack for constrained devices</div>
        </p>
    </div>
    <p class="Body-Text_Body-Text---Justified">The software running on MCU-based devices aims at supporting specific tasks. The key features of the software stack running
        on a device may include</p>
    <ol>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">IoT Operating System</span> – many devices will run with ‘bare metal’, but some will have embedded or real-time
            operating systems that are particularly suited for small constrained devices, and that can provide IoT-specific
            capabilities. </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Hardware Abstraction</span> – a software layer that enables access to the hardware features of the MCU, such
            as flash memory, GPIOs, serial interfaces, etc.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Communication Support </span>– drivers and protocols allowing to connect the device to a wired or wireless protocol
            like Bluetooth, Z-Wave, Thread, CAN bus, MQTT, CoAP, etc., and enabling device communication.
        </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Remote Management </span>– the ability to remotely control the device to upgrade its firmware or to monitor its
            battery level. </li>
    </ol>
    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor004"></a>Stack for Gateways: Connected and Smart Things</h2>
    <p class="Body-Text_Body-Text---Justified">The IoT gateway acts as the aggregation point for a group of sensors and actuators to coordinate the connectivity of
        these devices to each other and to an external network. An IoT gateway can be a physical piece of hardware or functionality
        that is incorporated into a larger “Thing” that is connected to the network. For example, an industrial machine might
        act like a gateway, and so might a connected automobile or a home automation appliance. </p>
    <p class="Body-Text_Body-Text---Justified">An IoT gateway will often offer processing of the data “at the edge” and storage capabilities to deal with network latency
        and reliability. For device to device connectivity, an IoT gateway deals with the interoperability issues between
        incompatible devices. A typical IoT architecture would have many IoT gateways supporting masses of devices.</p>
    <p class="Body-Text_Body-Text---Justified">IoT gateways are becoming increasingly dependant on software to implement the core functionality. The key features of
        a gateway software stack include</p>
    <div id="_idContainer021">
        <img class="img-responsive" src="/resources/white-papers/iot-architectures/image/schema-archi2-03.png" alt="" style="max-width: 60%; margin:0 auto;"/>
    </div>
    <div id="_idContainer022" class="Bloc-de-texte-standard">
        <p class="Specials_Foreword-or-sidetext">
            <div class="CharOverride-7"style="text-align: center; font-style: italic; font-size: .9em;">Software stack for gateways</span>
        </p>
    </div>
    <ol>
        <li class="Body-Text_Special-Body-Text_Numbered-List ParaOverride-2">
            <span class="CharOverride-8">Operating System</span> – typically a general purpose operating system such as Linux.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Application Container or Runtime Environment</span> – IoT gateways will often have the ability to run application
            code, and to allow the applications to be dynamically updated. For example, a gateway may have support for Java,
            Python, or Node.js.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Communication and Connectivity</span> – IoT gateways need to support different connectivity protocols to connect
            with different devices (e.g. Bluetooth, Wi-Fi, Z-Wave, ZigBee, Thread). IoT gateways also need to connect to
            different types of networks (e.g. Ethernet, cellular, Wi-Fi, satellite, etc.…) and ensure the reliability, security,
            and confidentiality of the communications.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Data Management &amp; Messaging </span>– local persistence to support network latency, offline mode, and real-time
            analytics at the edge, as well as the ability to forward device data in a consistent manner to an IoT Platform.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Remote Management </span>– the ability to remotely provision, configure, startup/shutdown gateways as well as
            the applications running on the gateways. </li>
    </ol>
    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor005"></a>Stack for IoT Cloud Platforms</h2>
    <p class="Body-Text_Body-Text---Justified">The IoT Cloud Platform represents the software infrastructure and services required to enable an IoT solution. An IoT
        Cloud Platform typically operates on a cloud infrastructure (e.g. OpenShift, AWS, Microsoft Azure, Cloud Foundry)
        or inside an enterprise data center and is expected to scale both horizontally, to support the large number of devices
        connected, as well as vertically to address the variety of IoT solutions. The IoT Cloud Platform will facilitate
        the interoperability of the IoT solution with existing enterprise applications and other IoT solutions.</p>
    <div id="_idContainer024">
        <img class="img-responsive" src="/resources/white-papers/iot-architectures/image/schema-archi2-04.png" alt="" style="max-width: 60%; margin:0 auto;"/>
    </div>
    <div id="_idContainer025" class="Bloc-de-texte-standard">
        <p class="Specials_Foreword-or-sidetext">
            <div class="CharOverride-7" style="text-align: center; font-style: italic; font-size: .9em;">Software stack for IoT Cloud Platforms</div>
        </p>
    </div>
    <p class="Body-Text_Body-Text---Justified">The core features of an IoT Cloud Platform include</p>
    <ol>
        <li class="Body-Text_Special-Body-Text_Numbered-List ParaOverride-2">
            <span class="CharOverride-8">Connectivity and Message Routing </span>– IoT platforms need to be able to interact with very large numbers of
            devices and gateways using different protocols and data formats, but then normalize it to allow for easy integration
            into the rest of the enterprise.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Device Management and Device Registry</span> – a central registry to identify the devices/gateways running in
            an IoT solution and the ability to provision new software updates and manage the devices.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Data Management and Storage</span> – a scalable data store that supports the volume and variety of IoT data.
        </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Event Management, Analytics &amp; UI </span>– scalable event processing capabilities, ability to consolidate
            and analyze data, and to create reports, graphs, and dashboards. </li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Application Enablement</span> – ability to create reports, graphs, dashboards, … and to use API for application
            integration.
        </li>
    </ol>
    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor006"></a>Cross-Stack Functionality</h2>
    <p class="Body-Text_Body-Text---Justified">Across the different stacks of an IoT solution are a number of features that need to be considered for any IoT architecture,
        including</p>
    <ol>
        <li class="Body-Text_Special-Body-Text_Numbered-List ParaOverride-2">
            <span class="CharOverride-8">Security</span> – Security needs to be implemented from the devices to the cloud. Features such as authentication,
            encryption, and authorization need be part of each stack.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Ontologies</span> – The format and description of device data is an important feature to enable data analytics
            and data interoperability. The ability to define ontologies and metadata across heterogeneous domains is a key
            area for IoT.</li>
        <li class="Body-Text_Special-Body-Text_Numbered-List">
            <span class="CharOverride-8">Development Tools and SDKs</span> – IoT Developers will require development tools that support the different
            hardware and software platforms involved.</li>
    </ol>
</div>
<div class="_idGenObjectLayout-1">
    <div id="_idContainer028" class="Graphics-Styles_Wrapped-Graphic">
        <img class="img-responsive" src="/resources/white-papers/iot-architectures/image/schema-archi2.png" alt="" />
    </div>
</div>
<div id="_idContainer029" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor007"></a>Key Characteristics for IoT Stacks</h1>
</div>

<table>
    <tr>
        <td style="padding-right: 1em;vertical-align: top;padding-bottom:2em;padding-top: .2em;">
            <img class="img-responsive" src="data:image/png;base64,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"
                alt="" />
        </td>
        <td>
                <p class="Body-Text_Body-Text---Justified">
                <strong class="BOLD">Loosely coupled</strong> - Three IoT stacks have been defined but it is important that each stack can be
                used independently of the other stacks. It should be possible to use an IoT Cloud Platform from one supplier
                with an IoT gateway from another supplier and a third supplier for the device stack.</p>
        </td>
    </tr>

    <tr>
            <td style="padding-right: 1em;vertical-align: top;padding-bottom:2em;padding-top: .2em;">
                    <img class="img-responsive" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAxCAYAAAAsoQwQAAAACXBIWXMAABcRAAAXEQHKJvM/AAACvUlEQVR4Xu2aYXHjMBCFF0IgBIIhGEIgBMJBEIRCCIRAMIRCMIQwyEmx5k6ydrVrS0km7fPM96PqavP8Xi3Lqel+v1MP/HHyXD2TVgtk1ILqZKKDx3lmzz0yafOAjFrATiIaPZckhJRJmw9k1IJiQn41IJDOqAXFhHoYCKQRfpDoSMuyxKEF8p3WawJADj+43Kg1401oAkAOP4hA3gY/mAdy80x70QSAHH4wD2TSmoB+8IMI5G3wg3kgc/x5F5oAkMMP4qb+NvjBFwXijy8ybAw4kh5nrbbCkPTRaiW+NJO3IBnlyGC2QLYrq374UqP1Y+mkdUz6aLUS1XPcimSUMwhpFkgIpPREMMoZhDQLJARSeiIY5QxCmgUSAik9EYxyBiHNAgmBlJ4IRjmDkGaBhEBKTwSjnEFIs0BCIKUnglHOIKRZoD8Gkv/vUiXpcdRqKxySPlqtxLA+rxYkoxzpxjcHAkr4QQTyNvjBFwVCuIeUnghGOYOQZoGEQEpPBKOcQUizQEIgpSeCUc4gpFkgIZDSE8EoZxDSLJB+QSC0dWuvmfZM6AcHQksQk2F+jmbaM9klOJL0cFpthTHpo9VyzJ7T6pzCC+gXw1wOFxocSbuM2mGfZulzA7nFzz2szudP/J02n+M79tid5lbO2hXzqdDyRzcbPKgxxF67E93DWTu5T4KW1WUynLeGS3qqxb0Jl/X4AwgvaGjnamGm/EvOx9vq2iTwPMbVVff4i9UmgedQvEIUjrBNmw2TQV9mWu3SHoHEVAZDA9CX0zqMf4HEUJyhCejDVdy5rdavydAMtBEeM4qlSgrkSK99LvmNsEsVG0gM5WxoCvYx1cJgA4mhXA3NwXbUN1SkQMJWGEtXf8JDuHj/EAOJoYyGDwDbuewKJIbS6/sa8J9bSyBh6cJ3XZ3ZHUgMBU/xfZlrfv8Fu0cX0TfOx9kAAAAASUVORK5CYII="
                alt="" />
        </td>

        <td>
            <p class="Body-Text_Body-Text---Justified">
                <strong class="BOLD">Modular</strong> - Each stack should allow for the features to be sourced from different suppliers. </p>
        </td>
    </tr>

    <tr>
            <td style="padding-right: 1em;vertical-align: top;padding-bottom:2em;padding-top: .2em;">
                    <img class="img-responsive" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABTCAYAAAAFm/BEAAAACXBIWXMAABcRAAAXEQHKJvM/AAAE5klEQVR4Xu2c3XWjMBCFp4SUQAkpgRJSAiW4gH2ghJTA4z6mBJXghy3AJbgDL7JETEYSVwJpkHE458vxZmdGc2+wED823W430oxbP3IduVXCeaSd+ns2zA8jAgndiw6JqBG99RHi9qZBQmpDb763v9oR37vnEwmpDfKI6FBSacZtYD0plFMb3FiFEqSota9YqhVQa1+xVCug1r5iqVZAbF/j1pBZ2UycRlraeSURLUCa2L6sibcAFzIHwm7kDY2Zk2gB0qT0tWAsR5v8jsbOQZIASVL6ijCU80WFp4okAZKk9EVmOtB8kJlnB8Kn6frE6IT6WEuSAEly9DVub2TmV7Vg8IDqrCGLgBLk7ovM6mGQMje7gFyU6ovMlHEpbW4xAVsp2ReZKcI3B2ebc4sK2ELpvgLm6gNag3JjKC5gLRJ9WXMvbKwB5cUgImANUn2R/8ytQXkIMQGpSPZF7nJs84V1UQEpSPZF7l57QTkIUQEpSPdF7ly76ZqCuIBYpPsat0825qall7iAWKT7Inc6GFAOqCcrIBbpvsgsvbKNKS4gFqm+yKwI3jxjXuzvphOJpDlXTEAqUn3Z+nfjyD0Tm5+dtagWqysjIBWpvmZj6NPZf2zcudEtqsXqyghIRaovNs4SLarF6soISEWqL3LPunzovTnpZqSYgFSk+qLwJcS5qUkHLltXRkAqkn0tmLvKVFtTTkAK0n15zF1tqq0nKyCWPfqambvJVFtLXkAMe/VlzW1QHIILOKMECcgs1ncxNhfcWM2AkkpiTb0ewdilpUYtbLqEtwd6ayOE7cmFEhfnNWB+mMdwkMA9uNDGo/NePF6YR3D0VXRVCSdK2FMX6nSB+C6Us2IM548PG34WKLzX94H4PpSzYozW/n9H9g4vbPhZ2NtYMuvfaTXTw4Zrg8yU9UXsMt6C6D5Qpw/lLIy9ZOzX7N9XKKQ26OeBVpGd3+jx8DGnCdRpQjkLY4fGmO+tBiSkNsjd0z5QjgTEb5+jBFCsRTG58Rgr3oMP4qsMlLBQaLDCBhSbk1qN5cAAb5L7yPmAcnJxWGM9poqaS+Zg0c9oUM4ewIAfwWFTRc19BmDAd2D8N3H0qNYrAAO+A83RDpmqUajWESG+LkYJs8TJWL0Q/sPM/EuPBbJCtY4I8Xc0SpglKmveO7nXcHt6XPlXqNYR2WLs3Tz7mhv7aX+vze1RrS1QpauC1cayIg0zVqGcXDgCKlnHZjHWFpqLu6L4XLyCsYoJFLmF8grGcoGbPxsVQ8XGNrRmueUpxB+qEJkOajWWAwMWk93PRhW///8qxnZ8r6WEO6tHBgYgPHutQjmvAAxAkPmCmxtjQHlHBwbEQP7LicMrTQuU69YMK8qfhp7Qv2tR/hGgXOtYT+GQudPeK3ICsRfFjLXFtbkqYO60B5+2mOwIqOQdUdTY4CB+7pcYyezNvaVbUbtFORI4faGEtdDyF4iFUBF1X9vY2YCTwfzx96MZ21HuVUEsZNa80zO4hzKWAwNKQu6DafCg9mtsITx/jCpPQmDAL+uAAb+sAwb8Egc9DsrD/TiAEmqGzFmcfnG2orpAXEs/b5lPhOKbQLymWejjAWq+RsicOg+OGEr+vIEKxLeBeO8qhNwL/mcookbIfw14T2Pn9//M00JIRK2Q/+uc+kBsUWNtzr0e2bX4f8BJM7HL0fWIAAAAAElFTkSuQmCC"
                alt="" />
        </td>

        <td>
            <p class="Body-Text_Body-Text---Justified">
                <strong class="BOLD">Platform-independent</strong> - Each stack should be independent of the host hardware and cloud infrastructure.
                For instance, the device stack should be available on multiple MCUs and the IoT Cloud Platform should run
                on different Cloud PaaS.</p>
        </td>
    </tr>

    <tr>
            <td style="padding-right: 1em;vertical-align: top;padding-bottom:2em;padding-top: .2em;">
                    <img class="img-responsive" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABNCAYAAAAW92IAAAAACXBIWXMAABcRAAAXEQHKJvM/AAAC40lEQVR4Xu2by5GjMBCG/xDmvheFwG2vDmFCIIGtcgiE4BAUgkNQCIRACJMBAysxbmSNu5FBNkKu+mpcVtOSPh562AMAeqA/KC0EQbnz88YMNAdBIyCg6fseR2B4nYqAIuCFAlwDatj7cXz/wR2zJi8T4Dr8ReqkXAcUl2MNkgsYzzDsmBvqOGWUU3P5nuUVAozXUT3w6RpyHui88orL+QxJBcDe6/QMBzuH+djccXmfIbWAjtTx8MxifqV8crljSSZgeCmSXwviKxJ/4eJjSSmAVnTm4t0xU7zhYmN5lYCai3fHZCWAXtJaEK+WxMeSTICrrHP5xxHg4YwP85Gg5nLHklqAIXW0v0nAfLjsOVnPkEyAV9FE5zqrSMw1EKe5/LGkFNB5Hfc7GYKuFU5cHTEkEQA7xZ1yG9j1gH7Q8TFGYX4rtFw9MWBrAa6z9EwqUqYQXhFWJMZs0S6Sf3MBmuS9eGUNKaMiWhKjvBjF1bmEFAIMyWtwe+DdXRle7JnkaMjnV67OJSCBAHr/T1wwf9o3LpZOln7mCrCyOlK22uIIWwsgldAOUGaTIlg5d2fba2jH1SkliQBSWYP7h17txfhn++Qw5LMvri4pSQW4CqchcOxQcJkLu0MUulomVlseJxcgBfdbZ7377MQdu4R3FqBwuxXGvzV3TAxvK2ACK4/7gfzvLWBrioAiQCAAdoZmMqGOEdCRshxQSwUc+wrImSKgCBAIgF3AjOt3kwFVjICWlO2d2bYahAJO+P3nLHsj1LepLByUM0VAESAUALu722TAx2IByOtn9LNvpSEUUAsS7wW9+ApwgRVuW9S7JfoZkCtFgFQAApfTTimjACJGAS1IvBeWCzj8LZAzRUARIBCAo0+FUbbE/m+KNpmwfFM0Z4qAIkAgAHYvIMW2uOYavDYQCjCCxq9FzTV6TSAUkOqrMdF/k60JJAJypggoAoqAIqAICAg4Kklme+8M/gz8Oyh/vwF4DLwlUOlgGgAAAABJRU5ErkJggg=="
                alt="" />
        </td>

        <td>
            <p class="Body-Text_Body-Text---Justified">
                <strong class="BOLD">Based on open standards</strong> - Communication between the stacks should be based on open standards to
                ensure interoperability.</p>
        </td>
    </tr>

    <tr>
            <td style="padding-right: 1em;vertical-align: top;padding-bottom:2em;padding-top: .2em;">
                    <img class="img-responsive" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAACXBIWXMAABcRAAAXEQHKJvM/AAADWklEQVR4Xu2cwZEiMQxFFcLc90II3PbaMWwEncBUEQKhOJQOYUOYEDYDFoyo7fVgfVktd7vBVL3LIH3J7wBloIaI6NIww+VyodYgxeJbMqADbAEpFt+SAR1gCyhZ8s+VaUO+aIfSJtRQk+vj3KUV0qUZWCLtVsv9tfl55WWkpb21+KTkDxNaribUpZVDXVo55CvtRPfXOQ/eRpq6F9GlGejSDHRpBro0A12agb1JC4SvNQ+mpHdA87Qkuc1LW8KA5mnp0gx0aQb2Jq3kKhSS3gHN05LkNi9tQD0evYguzUCXZqBLM9ClGejSDLyTtED46qXlbaTVoksz0KUZeClpB8JXLQ9+XHkNaWvSpRlIpbXGgA6wBaRYfEt+X/lAhxAOd0A1Fkix+NaYxF0fR7r/sjOg2lJuj8mB28HmB/1S9ORIs4rF0T9hj35XcbBAA93fiueHPKMekBes4p4IcxcHCzR4S+PMYnGCsAeT1K8FFmioIY1z1eIUwlTiNcACDbWkcTYUJwg7kcNr5LedUIGGmtI4PytOEDZy74e3OFigobY0npETlxU263UVBws0rCGN5zwTJwqb9bqJgwUa1pLGsyRxI+h1EQcLNKwsbbQIm/UvFgcLNKwlbamwWc4icXCAhjWkeQlLMoNFnBR4IPwp5oNTMjgoeh4cFYcb6fvhFgmbZYcnuaI4KeycWdSbCRxqzPSNSIgWKhQnBZ0VB/ZgEnYYMz0jElEKFYiTQs6KA3swZeaPmfoRCbBCSnFSwDlpDoS/idYiSqMNhM1mhydz/xMnNaeHG9BALUZpt+sSfNNYym6lcc0zcTdGlG9FIyzWCQGbSuO61cRphcVaIWRzaVxbXVyJsFgvBDUhjeuriSsVFnuEsGakcY+7OIuw2CcENiWN+1zE0f3CbhIW+4Xg5qRx7yJxtPATjpghhDcpjftN4jyExRxhQLPSOGMgxfcDs3oXYTFLWKppaZxz1IjzFBbzhIWal8ZZojhvYTFTWGYX0jgvJ+7kLSzOExbZjTTOzIlzFRZnCUvsShrnInHTUmFxjrDA7qRxdk5cQL1apOG7lMb5qbiAekqQBu9WGs94iAuothRpaCqtFhNa0grV+qGyMHD30mqRf6JLy5J/4v5fNj9X4BdasjX+AnUa9N5gGqmbAAAAAElFTkSuQmCC"
                alt="" />
        </td>

        <td>
            <p class="Body-Text_Body-Text---Justified">
                <strong class="BOLD">Defined APIs</strong> - Each stack should have defined APIs that allow for easy integration with existing
                applications and integration with other IoT solutions.</p>
        </td>
    </tr>



</table>

<div id="_idContainer038" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor008"></a>Open Source Technology for IoT</h1>
</div>




<div id="_idContainer065" class="Bloc-de-texte-standard">

    <blockquote>
        <p class="Editorial-Impressum_Editor-s-Text">The open source community has become an active producer of technology for IoT solutions. Like the LAMP stack for
            websites, there are a set of open source projects that can be used as the building blocks for an IoT solution
            architecture. </p>
        <p class="Editorial-Impressum_Editor-s-Text _idGenParaOverride-1">The Eclipse IoT community is very active in providing the technology that can be used in each stack of an IoT solution.
            Eclipse IoT has 26 different open source projects that address different features of the IoT stacks. In addition
            to the Eclipse IoT projects, there are other open source projects that are also relevant to an IoT stack. The
            next few pages provide a brief summary of how Eclipse IoT as well as other open source projects can be used to
            implement IoT stacks.</p>

    </blockquote>

    <h2 class="purple Titles_Headings_Heading4 ParaOverride-3">
        <a id="_idTextAnchor009"></a>Open Source Stack for Constrained Devices</h2>
    <p class="Body-Text_Body-Text---Justified">Eclipse IoT provides a set of libraries that can be deployed on a constrained embedded device to provide a complete IoT
        development stack. </p>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">IoT Operating Systems</strong> – Contiki-NG, RIOT, FreeRTOS, Zephyr, Apache Mynewt.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Hardware Abstraction</strong> –
            <a href="https://projects.eclipse.org/projects/iot.edje">
                <span class="bold---brand1">Eclipse Edje</span>
            </a> provides an high-level API for accessing hardware features provided by microcontrollers (e.g GPIO, ADC, MEMS,
            etc.). It can directly connect to native libraries, drivers, and board support packages provided by silicon vendors.
            <!-- <a href="https://projects.eclipse.org/projects/iot.edje">
                <div id="_idContainer039">
                    <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/edje.png" alt="" />
                </div>
            </a> -->
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Device Management</strong> –
            <a href="https://projects.eclipse.org/projects/iot.wakaama">
                <span class="bold---brand1">Eclipse Wakaama</span>
            </a> provides an implementation of the OMA LWM2M standard.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Communication</strong> – Open source projects like
            <a href="https://eclipse.org/paho">
                <span class="bold---brand1">Eclipse Paho</span>
            </a> or
            <a href="https://projects.eclipse.org/projects/iot.wakaama">
                <span class="bold---brand1">Eclipse Wakaama</span>
            </a> provide implementation of IoT communication protocols such as, respectively, MQTT or LWM2M.</li>
    </ul>
    <h2 class="purple Titles_Headings_Heading4">
        <a id="_idTextAnchor010"></a>Open Source Stack for Gateways</h2>
    <p class="Body-Text_Body-Text---Justified">Within the Eclipse IoT community there are a variety of projects that work to provide the capabilities that an IoT gateway
        requires. </p>
    <div class="_idGenObjectLayout-1">
        <a href="https://eclipse.org/kura">
            <!-- <div id="_idContainer040">
                <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/kura.png" alt="" />
            </div> -->
        </a>
    </div>
    <p class="Body-Text_Body-Text---Justified">
        <a href="https://eclipse.org/kura">
            <span class="bold---brand1">Eclipse Kura</span>
        </a> provides a general purpose middleware and application container for IoT gateway services. An IoT gateway stack based
        on Eclipse Kura would include the following:</p>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Operating System</strong> – Linux (Ubuntu/Ubuntu Core, Yocto-based linux distribution), Windows.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Application Container or Runtime Environment</strong> –
            <span class="bold---brand1">Eclipse Equinox</span> or
            <span class="bold---brand1">Eclipse Concierge</span> (OSGi Runtime).</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Communication and Connectivity</strong> –
            <a href="https://eclipse.org/kura">
                <span class="bold---brand1">Eclipse Kura</span>
            </a> includes APIs to interface with the gateway I/Os (e.g. Serial, RS-485, BLE, GPIO, etc.) and support for many
            field protocols that can be used to connect to devices, e.g MODBUS, CAN bus, etc.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Network Management</strong> –
            <a href="https://eclipse.org/kura">
                <span class="bold---brand1">Eclipse Kura</span>
            </a> provides advanced networking and routing capabilities over a wide-range of interfaces (cellular, Wi-Fi, Ethernet,
            etc.).
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <strong class="BOLD">Data management &amp; Messaging</strong> –
            <a href="https://eclipse.org/kura">
                <span class="bold---brand1">Eclipse Kura</span>
            </a> implements a native MQTT-based messaging solution, that allows application running on the gateway to transparently
            communicate with a Cloud Platform, without having to deal with the availability of the network interfaces, or
            how to represent IoT data. Support for additional messaging protocols is available through the built-in Apache
            Camel message routing engine.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Remote management</span> –
            <a href="https://eclipse.org/kura">
                <span class="bold---brand1">Eclipse Kura</span>
            </a> provides a remote management solution based on the MQTT protocol, that allows to monitor the overall health of
            an IoT gateway, in addition to control (install, update, modify settings) the software it’s running.</li>
    </ul>
    <p class="Body-Text_Body-Text---Justified---rule-above">
        <a href="https://eclipse.org/smarthome">
            <span class="bold---brand1">Eclipse SmartHome</span>
            <!-- <div id="_idContainer041">
                <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/smarthome.png" alt="" />
            </div> -->
        </a> provides an IoT gateway platform that is specifically focused on the home automation domain. An Eclipse SmartHome
        stack would including the following:</p>
    <ul>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Operating System </span>– Linux (Ubuntu/Ubuntu Core, Yocto-based linux distribution), Windows or macOS.</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Application Container or Runtime Environment</span> –
            <a href="https://eclipse.org/equinox">
                <span class="bold---brand1">Eclipse Equinox </span>
            </a>or
            <a href="https://eclipse.org/concierge">
                <span class="bold---brand1">Eclipse Concierge</span>
            </a> (OSGi Runtimes).</li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Communication and Connectivity</span> – Eclipse SmartHome brings support for many off-the-shelf home automation
            devices such as Belkin WeMo, LIFX, Philips Hue, Sonos, etc. Eclipse SmartHome focuses on enabling home automation
            solutions to communicate within an “Intranet of Things” ; therefore offline capabilities are a paramount design
            goal.
        </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Data Management &amp; Messaging </span>– Eclipse SmartHome has an internal event bus, which can be exposed to
            external systems through e.g. SSE or MQTT. It furthermore provides mechanisms for persisting values in databases
            and for running local business logic through a rule engine. </li>
        <li class="Body-Text_Special-Body-Text_Bullet-List">
            <span class="CharOverride-8">Remote Management </span>– Eclipse SmartHome supports device onboarding and configuration through its APIs. It
            furthermore provides an infrastructure to perform firmware update of connected devices.</li>
    </ul>
    <p class="Body-Text_Body-Text---Justified---rule-above">
        <a href="https://eclipse.org/4diac">
            <span class="bold---brand1">Eclipse 4DIAC</span>
        </a> provides an industrial-grade open source infrastructure for distributed industrial process measurement and control
        systems based on the IEC 61499 standard. 4DIAC is ideally suited for Industrie 4.0 and Industrial IoT applications
        in a manufacturing setting. </p>
    <div class="_idGenObjectLayout-1">
        <a href="https://eclipse.org/4diac">
            <!-- <div id="_idContainer042">
                <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/4diac.png" alt="" />
            </div> -->
        </a>
    </div>
    <p class="Body-Text_Body-Text---Justified">The IEC 61499 standard defines a domain specific modeling language for developing distributed industrial control solutions
        by providing a vendor independent format and for simplifying support for controller to controller communication.
    </p>
    <h2 class="purple Titles_Headings_Heading4 _idGenParaOverride-1">
        <a id="_idTextAnchor011"></a>
    </h2>
    <h2 class="purple Titles_Headings_Heading4">Open Source Stack for IoT Cloud Platforms</h2>
    <p class="Body-Text_Body-Text---Justified">The Eclipse IoT Community has a number of projects that are focused on providing the functionality required for IoT cloud
        platforms. </p>
    <div class="_idGenObjectLayout-1">
        <a href="https://eclipse.org/kapua">
            <!-- <div id="_idContainer043">
                <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/kapua.png" alt="" />
            </div> -->
        </a>
    </div>
    <p class="Body-Text_Body-Text---Justified">
        <a href="https://eclipse.org/kapua">
            <span class="bold---brand1">Eclipse Kapua</span>
        </a> is a modular platform providing the services required to manage IoT gateways and smart edge devices. Kapua provides
        a core integration framework and an initial set of core IoT services including a device registry, device management
        services, messaging services, data management, and application enablement.</p>
    <p class="Body-Text_Body-Text---Justified">The goal of Eclipse Kapua is to create a growing ecosystem of micro services through the extensions provided by other
        Eclipse IoT projects and organizations.</p>
    <p class="Body-Text_Body-Text---Justified---rule-above">
        <a href="https://eclipse.org/om2m">
            <span class="bold---brand1">Eclipse OM2M</span>
            <!-- <div id="_idContainer044">
                <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/om2m.png" alt="" />
            </div> -->
        </a> is an IoT Platform specific for the telecommunication industry, based on the oneM2M specification. </p>
    <p class="Body-Text_Body-Text---Justified">It provides a horizontal Common Service Entity (CSE) that can be deployed in an M2M server, a gateway, or a device. Each
        CSE provides Application Enablement, Security, Triggering, Notification, Persistency, Device Interworking, Device
        Management.
    </p>
    <p class="Body-Text_Body-Text---Justified---rule-above">The Eclipse IoT community also has a number of standalone projects that provide functionality to address key features
        required for an IoT cloud platform. These projects can be used independently of Eclipse Kapua and over time some
        may be integrated into Kapua.</p>
    <ul>
        <li class="Titles_Headings_Heading5">Connectivity and Protocol Support
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <!-- <div id="_idContainer049">
                        <div id="_idContainer045">
                            <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/Hono.png" alt="" />
                        </div>
                        <div id="_idContainer046">
                            <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/leshan.png" alt="" />
                        </div>
                        <div id="_idContainer047">
                            <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/hawkbit.png" alt="" />
                        </div>
                        <div id="_idContainer048">
                            <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/mosquitto.png" alt="" />
                        </div>
                    </div> -->
                    <a href="https://eclipse.org/hono">
                        <span class="bold---brand1">Eclipse Hono</span>
                    </a> provides a uniform API for interacting with devices using arbitrary protocols, as well as an extensible
                    framework to add other protocols. </li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/mosquitto">
                        <span class="bold---brand1">Eclipse Mosquitto</span>
                    </a> provides an implementation of an MQTT broker.</li>
            </ul>
        </li>
        <li class="Titles_Headings_Heading5">Device Management &amp; Device Registry
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/leshan">
                        <span class="bold---brand1">Eclipse Leshan</span>
                    </a> provides an implementation of the OMA LWM2M device management protocol. </li>
                <li class="Body-Text_Special-Body-Text_Bullet-List _idGenParaOverride-1">
                    <a href="https://projects.eclipse.org/projects/iot.hawkbit">
                        <span class="bold---brand1">Eclipse hawkBit</span>
                    </a> provides the management tools to roll out software updates to devices and gateways.</li>
            </ul>
        </li>
        <li class="Titles_Headings_Heading5">Event Management &amp; Application Enablement
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/hono">
                        <span class="bold---brand1">Eclipse Hono</span>
                    </a> helps to expose consistent APIs for consuming telemetry data or sending commands to devices, so as to
                    rationalize IoT application development.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/ditto">
                        <span class="bold---brand1">Eclipse Ditto</span>
                    </a> provides a unified resource-based API that can be used to abstract real-world devices.</li>
            </ul>
        </li>
        <li class="Titles_Headings_Heading5">Analytics and Visualization
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <!-- <div id="_idContainer050">
                        <img class="_idGenObjectAttribute-1" src="/resources/white-papers/iot-architectures/image/10.png" alt="" />
                    </div> -->
                    Outside of the Eclipse IoT community there are many open source options for data analytics and
                    visualization, including Apache Hadoop, Apache Spark, and Apache Storm. </li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">Within the Eclipse community,
                    <a href="https://eclipse.org/birt">
                        <span class="bold---brand1">Eclipse BIRT</span>
                    </a> provides support for dashboards and reporting of data stored in a variety of data repositories.</li>
            </ul>
            <h2 class="purple Titles_Headings_Heading4">
                <a id="_idTextAnchor012"></a>Open Source for Cross-Stack Functionality</h2>
        </li>
        <li class="Titles_Headings_Heading5">Security
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://projects.eclipse.org/projects/iot.tinydtls">
                        <span class="bold---brand1">Eclipse tinydtls</span>
                    </a> provides an implementation of the DTLS security protocol, providing transport layer security between
                    the device and server.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <span class="bold---brand1">Eclipse Keti</span> provides an access control service that allows each stack in an IoT solution to protect
                    their resources using a RESTful interface.</li>
            </ul>
        </li>
        <li class="Titles_Headings_Heading5">Ontologies
            <!-- <div id="_idContainer051">
                <img class="_idGenObjectAttribute-1" src="data:image/png;base64,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"
                    alt="" />
            </div> -->
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/unide">
                        <span class="bold---brand1">Eclipse Unide</span>
                    </a> is a protocol for Production Performance Management (PPM) in the manufacturing industry. It establishes
                    an ontology for sharing machine performance information.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/whiskers">
                        <span class="bold---brand1">Eclipse Whiskers</span>
                    </a> implements the OGC SensorThings API that provides a standard way to share location based information
                    for devices.</li>
            </ul>
        </li>
        <li class="Titles_Headings_Heading5">Development Tools and SDKs
            <ul>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/vorto">
                        <span class="bold---brand1">Eclipse Vorto</span>
                    </a> provides a set of tools and repository for creating device information models.</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/jdt">
                        <span class="bold---brand1">Eclipse JDT</span>
                    </a> and
                    <a href="https://eclipse.org/cdt">
                        <span class="bold---brand1">Eclipse CDT</span>
                    </a> allow for integrated development of IoT solutions. For example, Eclipse Kura applications can be tested
                    and debugged from within the Eclipse Java IDE (JDT).</li>
                <li class="Body-Text_Special-Body-Text_Bullet-List">
                    <a href="https://eclipse.org/che">
                        <span class="bold---brand1">Eclipse Che</span>
                    </a> provides a browser-based IDE that can be used for building IoT solutions.
                    <a id="_idTextAnchor013"></a>Open Source Stack for IoT Cloud Platforms.</li>
            </ul>
        </li>
    </ul>
</div>

<div id="_idContainer067" class="Bloc-de-texte-standard">
    <h1 class="purple Titles_Headings_Heading1">
        <a id="_idTextAnchor014"></a>Conclusion</h1>
</div>

<div id="_idContainer068" class="Bloc-de-texte-standard">
    <p class="Body-Text_Body-Text---Justified">An IoT Solution requires substantial amount of technology in the form of software, hardware, and networking. </p>
    <p class="Body-Text_Body-Text---Justified">In this white paper we have defined the software requirements across three different stacks. For the IoT industry to
        be successful, it needs to enable more than a succession of independent silos designed by one vendor that address
        just one business case at the same time. As examples, a connected car comprises MCUs from many different vendors,
        and a smart city or a smart factory will have a wide variety of sensors and gateways, and an even wider variety of
        companies looking at building end applications, etc. </p>
    <p class="Body-Text_Body-Text---Justified">The last twenty years have proven that open source software and open source communities are key providers of technology
        for the software industry. The Internet of Things is following a similar trend, and it is expected that more and
        more IoT solutions will be built on open source software.</p>
    <p class="Body-Text_Body-Text---Justified">For the past six years, the Eclipse IoT community has been very active in building a portfolio of open source projects
        that companies and individuals use today to build their IoT solutions. </p>
    <p class="Body-Text_Body-Text---Left">If you are interested in participating, please join us and visit
        <a href="https://iot.eclipse.org">
            <span class="bold---brand1">https://iot.eclipse.org</span>
        </a>. </p>
        
</div>