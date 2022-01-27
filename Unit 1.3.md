# CPU Scheduling

+ CPU scheduling is the basis of multiprogramed OS.

+ By switching CPU among processes, the OS  can make the system more productive.

+ In single-processor systems, only one process can run at a time. Any other must wait until the CPU is free.

+ The objective of multiprogramming is to have some process running at all to maximize CPU utilization.

+ A process is execited until it must waitm typically for the completion of some IO request.

+ We don't want the CPU to sit idle, so we use CPU scheduling.

+ Several processes are kept in memory at one time.

+ When one process has to wait, the OS takes the CPU away from that process and gives it another process.

# CPU & IO Burst Cycles

Process execution consists of a cycle of CPU execution and IO wait. Process alternate between these two states.

CPU burst is when the process is being executed in the CPU.

IO Burst is when the CPU is waiting for the IO for futher execution.

# Preemptive & non-Preemptive Scheduling

### CPU Scheduler

+ Whenever the CPU becomes idle, the OS must select one of the processes in the ready queue to be executed. 

+ The selection process is carried out by the short-term scheduler or CPU scheduler. 

+ The scheduler selects a process from the processes in memory that are ready to execute and allocates the CPU to that process.

### Dispatcher

+ The dispatcher is the module that gives control of the CPU to the process selected by the short-term scheduler.

+ The time it takes for the dispatcher to stop one process and start another running is known as dispatch latency.

### CPU scheduling decisions may take place under the four circumstances

1. When the process switches from running state to waiting state. (waiting for IO operation)

2. When the process switches from running state to ready state. (when an interrupt occurs)

3. When the process switches from waiting state to running state. (at completion of IO operation)

4. When a process terminates.

For 1 & 4, there is no choice in terms of scheduling cus a new process must be selected for execution.

However, there is a choice for 2 & 3.

#### When scheduling takes place only under cases 1 & 4, we say that the scheduling scheme is non-preemptive or cooperative. Otherwise, it is preemptive.

# Scheduling criteria

1. CPU utilization
   
   + We want to keep the CPU as busy as possible.
   
   + Conceptually, CPU utilization can range from 0 to 100%.
   
   + But in a real system, he can be 40 to 90%.

2. Throughput
   
   + If the CPU is busy executing processes, then work is being done.
   
   + One measure of work is the no of process that are completed per unit time.

3. Turnaround time
   
   + How long it takes to execute a given process.
   
   + The interval from the time of submission of process to the time of completion.
   
   + The sum of periods spent waiting to get into memory, waiting in the ready queue, executing on the CPU, and doing IO.

4. Waiting time
   
   + Sum of periods spent waiting in the ready queue.

5. Response time
   
   The time process takes to start responding, not the time it takes to output the response.

# FCFS Algo

+ Simplest CPU scheduling algo.

+ The process that requests the CPU first is allocated the CPU first.

+ Managed with a **FIFO** queue.

+ When a process enters the ready queue, its PCB is linked onto the tail of the queue.

+ THE FCFS is non-preemptive.

## Disads

+ Troublesome for time-shared systems, where it is important that each user gets a share of the CPU at regular intervals.

+ Disastrous to allow one process to keep the CPU for an extended period.

## Convoy Effect

+ Processes with higher burst time arrived before the ones with smaller burst time, then the smaller processes have to wait for a longer processes to release the CPU.

# SJF Algo

+ This algo associates with each process the length of the process' next CPU burst.

+ When CPU is available, it is assigned to the process that has smallest next CPU burst.

+ If two processes have equal burst times, FCFS scheduling is used to break the tie.

+ SJF can be preemptive or non-preemptive.

## Disads

+ Algo should always know the length of the next CPU request.

+ Practically, there is no way to know the length of the next CPU burst.

# Priority Algo

+ A priority is associated with each process and the CPU is allocated to the process with the highest priority.

+ Equal priority processes are scheduled in FCFS order.

+ Can be preemptive or non-preemptive.

+ A preemptive priority scheduling algo will preempt the CPU if the priority of the newly arrived process is higher than the priority of current process.

+ A non-preemptive priority scheduling algo will simply put the new process at the head of the ready queue. 

## Starvation

+ A major problem is indefinite blocking or starvation.

+ Low priority processes can be starved.

### Solution

+ Solution to indefinite blockage of low-priority processes is aging.

+ Aging is a technique of gradually increasing the priority of processes that wait in the system for a long time.

# RR Algo

+ Designed specially for timeshared systems.

+ Similar to FCFS, but preemption is added.

+ A small unit of time called the time quantum is defined.

+ The ready queue is treated as a circular queue.

+ The CPU scheduler goes around the ready queue, allocating the CPU to each process for a time interval of up to 1 time quantum.
