+++
weight = 2
title = "Production Performance Management"
date = "2017-10-06T16:54:14+02:00"
market_segment = [
    "manufacturing"
]
aliases = [
    "/testbeds/ppm"
]

description = """
<p>The <strong>Production Performance Management</strong> demonstrates how to continuously monitor the performance of heterogeneous industrial equipment on a shop floor.</p>
"""

sub_description = """
<p>A key challenge of the manufacturing industry is to improve capacity, quality and flexibility, while lowering costs.</p>
<p>The Eclipse IoT Open Testbed for Production Performance Management demonstrates how to gather performance data from heterogeneous industrial assets, and how to analyze it in backend systems.</p>
"""

demo_link = "http://unide.eclipse.org:8081/dashboard/snapshot/VP1fKWuQmgeD9wuJMsMSOaOmqeO8mNus"
source_code_link = "https://github.com/eclipselabs/eclipseiot-testbed-productionperformancemanagement"

challenge =  """
<p>
    Key challenges for the manufacturing industry are to improve capacity, quality and flexibility, while lowering costs. 
</p>
<p>
    To overcome these challenges, factories look to improve optimization of factory equipment, referred to as Production Performance Management (PPM). However, the heterogeneous nature of the equipment used in the manufacturing industry sometimes makes it difficult to get an overall perspective. The equipment used in factories is often based on proprietary software that uses proprietary protocols, and it’s often difficult to update to more modern protocols. This environment makes it challenging to create solutions that monitor equipment across entire factory floors, and across different factories.
</p>
<div class="row col-md-10 col-md-offset-1">
<img src="/assets/images/testbeds/production-performance-management-value-proposition.png" class="img-responsive" style="margin-top: 3em;margin-bottom: 3em;">        
</div>
<div class="row col-md-12">
<p>
    The <strong>Eclipse Production Performance Management Testbed</strong> aims to showcase how consistent monitoring across all factory equipment leads to improved factory equipment optimization.
</p>
</div>
"""

[[organizations]]
name = "bosch"
role = "“The Production Performance Management Testbed shows how simple performance monitoring can be quickly implemented using open standards and open source software, like Eclipse Unide. This collaboration shows how different vendors can work together to solve Industry 4.0 solutions.” – Dr. Nils-H. Schmidt, Portfolio Management Industrial IoT"

[[organizations]]
name = "contact-software"
role = "“CONTACT is committed to the outstanding work of the Eclipse Open Source community. The PPM Open IoT testbed and our implementation of the PPMP protocol are excellent examples, stimulating future editions of CONTACT’s Elements for IoT framework.” — Frank Patz-Brockmann, Director Software-Development"

[[organizations]]
name = "eurotech"
role = "“We are excited to support the new Eclipse IoT Open Testbeds for Industry 4.0 with our partners. We continue to believe that testbeds are an important initiative in showcasing how open source components provide solid building blocks to accelerate the development and the deployment of IoT solutions and applications.” – Marco Carrer, CTO"

[[organizations]]
name = "fortiss"
role = "“With the Production Performance Management Testbed we can show how production performance data can easily be generated within Eclipse 4diac PLCs programs reducing the effort of integrating monitoring functionalities in PLC programs.” – Dr. Alois Zoitl, Head of Competence Field Industrie 4.0"

[[organizations]]
name = "influxdata"
role = "“InfluxData is pleased to be contributing to the Eclipse IoT Working Group’s Open IoT Testbed. As the leader in time-series event monitoring, InfluxData is excited to see the Open IoT Testbed’s continued progress towards IoT monitoring solutions which utilize time series data to increase efficiencies and lower costs.” – David G. Simmons, Senior Developer Evangelist"

[[learn_more]]
name = "PPMP Specification"
link = "https://www.eclipse.org/unide/specification/"

+++
<div class="row">
    <div class="col-md-12">
        <p>
        At the heart of the testbed is the Production Performance Management Protocol (PPMP), which allows uniform representation of all the data and information related to manufacturing processes. The testbed showcases how performance data from different industrial assets can be connected to the same IoT Cloud backend, so that this data can be further processed, or simply visualized. 
        </p>
    </div>
    <div class="col-md-10 col-md-offset-1">
        <img src="/assets/images/testbeds/production-performance-management-architecture.png" class="img-responsive">        
    </div>
    <div class="col-md-12">
        <h3 class="purple">Standardized communication using PPMP</h3>
        <p>
            PPMP specifies a format that allows to capture data that is required to do performance analysis of production facilities. It allows monitoring backends to collect and evaluate key metrics of machines in the context of a production process. It is doing that by allowing to relate the machine status with currently produced parts.
        </p>
        <p>
            All the devices that are part of the testbeds are leveraging PPMP as a way to describe measurements in a consistent format. The implementations of the PPMP libraries used in the testbed come from the <a href="https://www.eclipse.org/unide/" target="_blank">Eclipse Unide™</a> open source project. As of today, Unide provides a Java and a Python implementation of PPMP.
        </p>
        <h3 class="purple">Open Source based PLCs and IoT Gateways</h3>
        <p>
            A typical Industry 4.0 IoT architecture will include PLCs that actually control the manufacturing process and, either directly or through a more general purpose IoT Gateway, are communicating with a backend server where data is being stored and can be further analyzed. More and more, edge computing scenarios are implemented, where part of the data processing is actually performed directly in the factory, i.e. on the gateways.
        </p>
        <h4>➔ Eclipse 4diac™️</h4>
        <p>4diac is an open source PLC environment that allows to implement industrial control solutions in a vendor neutral way. 4diac implements IEC 61499 extending IEC 61131-3 with better support for controller to controller communication and dynamic reconfiguration. 4diac provides support for PPMP, that is leveraged in the testbed for connecting a boiler (simulated using a sample application made available with 4diac, but it can be easily replaced by a real machine) to the backend.</p>
        <h4>➔ Eclipse Kura™</h4>
        <p>The testbed includes a Kura based gateway with a PPMP plug-in that allows to easily interface a Modbus PLC to a PPMP backend.</p>
        <h3 class="purple">Enabling Advanced Data Analytics</h3>
        <p>
            The different endpoints of the testbed are all communicating with the same backend server that runs InfluxDB, a time series database that stores all the PPMP messages.
        </p>
        <p>
            The <a href="https://www.eclipse.org/unide/specification/" target="_blank">PPMP specification</a> is pretty straightforward, which enables people to easily implement data analytics based on the collected metrics (measurements, information regarding the industrial processes, …). An example of data visualization and analytics is provided in the form of a <a href="https://grafana.com/" target="_blank">Grafana</a> dashboard that aggregates and displays all the measurements coming from the different assets that are part of the testbed.
        </p>
        <h3>
            Integration with vendor ecosystem
        </h3>
        <p>
            The testbed is a great example of how open source can help implementers easily get started with their Industrial IoT solution, and get support from a vendor ecosystem to go to production.
        </p>
        <p>
            The Production Performance Management testbed features a grinding machine simulator that can be connected indifferently to the Eclipse Unide open source backend (based on InfluxDB and Grafana), or to e.g. <a href="https://www.contact-software.com/en/products/elements-for-iot/" target="_blank">CONTACT Elements</a> or <a href="https://www.bosch-si.com/manufacturing/solutions/production-performance/production-performance-manager.html" target="_blank">Bosch Production Performance Manager</a>.
        </p>
    </div>
</div>