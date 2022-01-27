# Introduction to OS

## What is OS?

+ An OS is a program that manages computer hardware.

+ It also provides a basis for application programs and acts as an **itermediary** between **computer user** and **computer hardware**.

+ eg. Windows, Linux, MacOS, iOS, Android

![](/images/2022-01-24-15-03-37-image.png)

## Types of OS

+ Batch OS

+ Time sharing OS

+ Distributed OS

+ Network OS

+ Real-time OS

+ Mutli-programming OS

+ Mutli-processing OS

+ Mutli-tasking OS

## Functions of OS

+ It is an interface between **user** & **hardware**.

+ Allocation of resources

+ Management of memory, security, etc

## Goals of OS

+ Convenience

+ Efficiency

+ Both

# Basics of OS

A modern general-pupose computer system consists of one or more CPUs and a number of device controllers connected through a common bus that provides access to shared memory.

+ Each device controller is in charge of a specific type of device.

+ The CPU and the device controllers can execute concurrently, competing for memory cycles.

+ To ensure orderly access to the shared memory, a memory controller is provide whose function is to synchronize access to the memory.

### Some imporant terms

1. Bootstrap Program
   
   + The initial program that runs when a computer is powered up or rebooted.
   
   + It is stored in the ROM.
   
   + It must know how to load the OS and start executing that system.
   
   + It must locate and load the OS kernel into the memory.

2. Interrupt
   
   + The occurence of an event is usually signalled by an interrupt from hardware or software.
   
   + Hardware may trigger an interrupt at any time by sending a signal to the CPU, usually by the way of the signal bus.

3. System call (Monitor call)
   
   + Software may trigger an interrupt by exexuting a special operation called system call.

4. Trap
   
   + A trap is a software-generated interrupt  caused either by an error or a user request.

## Interrupt steps

+ When the CPU is interrupted, it stops what it is doing and immediately transfers execution to a fixed location.

+ The fixed location usually contains the starting address where the service routine of the interrupt is located.

+ What the interrupt wants to do is written in that interrupt service routine (ISR).

+ The ISR executes.

+ The CPU resumes the interrupted computation.

# Storage structure

## Hierarchy of storage devices

Registers > Cache > Main Memory > Electronic Disk > Magnetic Disk > Optical Disk > Magnetic Tapes

As we go up the hierarchy,

+ Speed (access time) increases 

+ More expensive (cost per bit)

+ Storage size decreases

Main memory is small and expensive, so application programs are stored in 2° memory like HDD. Only when the application is to be ran, it is loaded in the RAM.

# I/O Structure

+ Storage is only one of many types of IO devices within a computer.

+ A large portion of OS code is dedicated to managing IO, both because of its importance to the reliability and perfomance of a system and becasue if the varying nature of the devices.

+ A general-purpose computer system consists of CPUs and multiple device controllers that are connected through a common bus.

+ Each device controller is in charge of a specific type of device. Device controller maintains local buffer storage and set of special purpose registers.

## Steps of performing IO operation

+ To start an Io operation, the device driver loads the appropriate registers within the device controller.

+ The device controller examines the contents of these registers to determine what action to take.

+ The controller starts the transfer of data from the device to its local buffer.

+ Once the transfer of data is complete, the device controller informs the device driver via an interrupt that it has finished its operation.

+ The device driver than returns control to the OS.

+ This form of interrupt-driven IO is fine for moving small amounts of data but can produce high overhead when used for bulk data movement.

+ To solve this problem, Direct Memory Access (DMA) is used.

# OS Services

1. User interface
2. Program Execution
3. I/O operations
4. File system manipulation
5. Process communications
6. Error detection
7. Resource allocation
8. Accounting
9. Protection and Security

# System Calls

+ System calls provice an interface to the services made available by an OS.

+ A program can run in **user mode** or **kernel mode** (privileged mode). The program is allowed to switch context from user mode to kernel mode when it needs to interact with hardware directly.

+ System call is the programmatic way in which a program requests a service from the kernel of the OS.

## Types of System Calls

1. Process Control
   
   + end, abort
   
   + load, execute
   
   + create, terminate process
   
   + get, set process attributes
   
   + wait for time
   
   + wait event, singal event
   
   + allocate, free memory

2. File Manipulation
   
   + create, delete file
   
   + open, close file
   
   + read, write, reposition
   
   + get, set file attributes

3. Device Manipulation
   
   + request, release device
   
   + read, write, reposition
   
   + get, set device attributes
   
   + logically attach, detach device

4. Information Maintenance
   
   + get, set date, time
   
   + get, set system data
   
   + get, set process, file, device arributes

5. Communications
   
   + create, delete communication connection
   
   + send, receive messages
   
   + transfer status information
   
   + attach, detach remote devices

# System Programs

System programs provide a convenient environment for program development and execution.

Some of them are simply user interfaces to system calls, while others are considerably complex.

## Types of System Programs

1. File Management
   
   + The system programs that help in manupulating files and directories fall under the category of file management system programs.
   
   + Create, delete, copy, rename, print, dump, list files and directories

2. Status Information
   
   + Programs that can ask the system for its status information.
   
   + Date, time, memory available, disk space, no of users, detailed performance, logging, debugging information

3. File Modification
   
   + Deals with modification of inner content of files.
   
   + Text editors which create, modify content of files.
   
   + Searching commands and tranformation of text also included.

4. Programming language support
   
   + Compliers, assemblers, debugger, interpreters
   
   + Provided with OS to run common programming languages like C, C++, Java, etc

5. Program loading and execution
   
   + Once the program is compiled, it has to be loaded and executed.
   
   + Absolute loaders, relocatable loaders, linkage editors, overlay loaders

6. Communications
   
   + Creating connections among processes, users, computer systems.
   
   + Allow users to send messages to each other's screens.
   
   + To send emails

## Other common application programs

+ Web browsers

+ Word processors

+ Spreadsheets

+ Database Systems

+ Games

# OS design & implementation

## Design Goals

1. Choice of hardware

2. Type of system (multiprocessing, multitasking systems)

Beyong this highest decision level, the requirements may be much harder to specify.

### Problems

1. Defining goals and specifications might not be possible

### User goals

The system should be

+ Convenient to use

+ Easy to learn and use

+ Reliable

+ Safe

+ Fast

### System goals / designers goals

The system should be

+ Easy to design

+ Easy to implement

+ Easy to main

+ Easy to operate

+ Flexible

+ Reliable

+ Error free

+ Efficient

## Mechanism & Policies

+ Mechanisms determine how to do something

+ Policies determine what will be done

+ One important principle is the seperation of policy from mechnaism.

+ It should be kept seperate for flexibilty

## Implementation of OS

Used to be done in Assembly before, however now high level languages are also used. Advantages are

+ Code can be written faster

+ It is more compact

+ It is easier to understand and debug

+ It is easier to port

# OS structures

## Simple Structure

 ![](/images/2022-01-24-22-49-23-image.png)

+ Found in early computer systems

+ All layers have access to base hardware.

+ Leaves system vunerable to malicious attacks.

+ Causes entire system to crash if application fails

## Monolothic Structure

![](/images/2022-01-24-22-58-05-image.png)

+ All functionalities are packed into kernel.

+ Inmplementation and mantainance is difficult as everything is packed at one place. To make change to single part, whole kernel has to be modified.

## Layered Structure

![](/images/2022-01-24-23-03-10-image.png)

### Ads

+ Hardware is protected by the layers above.

+ If change has to be done only to specific layer if needed.

### Disads

+ Difficult to design.

+ The system call has to pass through all layers to be executed. Might be time consuming.

## Microkernel

![](/images/2022-01-24-23-06-41-image.png)

+ Only main functionalities are in kernel.

+ Others are present as user level system programs.

+ Kernel and systems programs have to pass messages to coordinate.

### Ads

+ Most execution will be done in user mode.

### Disads

+ There could be decreased perfomance due to system overhead caused by continous message passing between system programs and kernel.

## Modules

![](/images/2022-01-24-23-11-23-image.png)

+ Core kernel has only core functionalities

+ Other functionalities are present in the form of modules

+ These modules are loaded into the core kernel either at boot-time or runtime.
