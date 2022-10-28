# Mac address validator

## About the tool
MAC Address Validator Tool searches your MAC Address or OUI in mac address vendor database. The MAC Address vendor database consists of a list of mac addresses of all devices manufactured till date. Finding the mac address from this database tells us which manufacturer originally manufactured this device and what is the prefix, postfix of a given mac address, moreover it tells us what country was this device manufactured. All this information is useful if you want to verify the generated mac address with the original vendor of this device in OUI vendor database.

[Go to the live tool](https://darshan-k-s.github.io/mac-validator/)

[How to find your MAC address](https://www.cmu.edu/computing/services/endpoint/network-access/mac-address.html)?

![successful run gif](https://raw.githubusercontent.com/darshan-k-s/mac-validator/main/src/assets/run.gif)


---

## What exactly is a MAC address?
MAC Addresses are unique 48-bit hardware number of a computer, which is embedded into a network card (known as a Network Interface Card) during the time of manufacturing. MAC address is used by the Media Access Control (MAC) sublayer of the Data-Link Layer. 

![](https://media.geeksforgeeks.org/wp-content/uploads/mac.jpg)

IEEE Registration Authority Committee assigns these MAC prefixes to its registered vendors. 

---

## Working of the tool

The validatior has 2 stages of address validation.

1. First, we use the [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match the entered address and verify the format. A MAC address is a unique identifier for network interfaces. It is a 48-bit number (12 hexadecimal characters). They can either be written in either of these formats:
    - MM:MM:MM:SS:SS:SS
    - MM-MM-MM-SS-SS-SS

    ```
    regex = ^[0-9a-f]{1,2}([.:-])[0-9a-f]{1,2}(?:\1[0-9a-f]{1,2}){4}$
    ```

2. After the format is right, we make an API call to [macaddress.io](https://macaddress.io/api). They provide the service of an interface to a mac address database for all devices till date, and is configured to lookup the details of the mac address entered. If the address is valid and exists, we get the manufacturer and device information. The API used is important as the MAC address vendor database is protected and not available to the general public. They enable us to use the database with an interface that comes with a price.

    [List of OUI and vendors](https://gist.githubusercontent.com/aallan/b4bb86db86079509e6159810ae9bd3e4/raw/846ae1b646ab0f4d646af9115e47365f4118e5f6/mac-vendor.txt).

![not found result](https://raw.githubusercontent.com/darshan-k-s/mac-validator/main/src/assets/errorCapture.PNG)

---

### Authors
- [Darshan K S](https://github.com/darshan-k-s)
- Mitul Agarwal