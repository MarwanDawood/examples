# [C++ sandbox with focus on STL library]

### Compile files, run the following:
`g++ file.cpp`
 
or

`g++ file.cpp  -std=c++14 && chmod 777 a.out`

To compile and link threads, add the option `-pthread`

---
### Cmake

* Generate Cmake files `cmake .`
* Build the project `cd src && make`
* Run the binary `./a.out`
* Debug programs (signals, arguments, callers, ...) `strace ./a.out`

---
### gdb

Add debugging data into the binary, this helps not to setp-in into unnecessary code
`g++ <source-file> -g`

Choose the parent process to debug
`set follow-fork-mode child`

Choose the other program that runs in the child to debug
`set follow-exec-mode new`

Jump to the moment your system crashed and generated the coredump, debugging information shall be enabled in compilation
`gdb ./a.out core`

* add a breakpoint (break) `b <function or line number>`
* clear breakpoint `clear <function or line number>`
* watch for variable changes `watch <global variable>`
* start the program (run) `r`
* step line by line (step) `s`
* step over a function (next) `n`
* continue till the next breakpoint or watch point (continue) `c`
* repeat the last comman `press enter`
* Show variable (print) `p <variable>`
* Show code associated with this variable `list`
* exit the gdb `quit`

---
### System

To see every process on the system using standard syntax:
`ps -e`

To see every process on the system using BSD syntax:
`ps aux`

* a = show processes for all users,
* u = display the process's user/owner,
* x = also show processes not attached to a terminal

View top active processes
`top`

Show program execution time, where -p is to specify POSIX format, 1m2 means 62 seconds
`time -p <command/program>`

Get IPv4 address
`ping -4 <url>`

Socket programming functions
`socket()`, `inet_pton()`, `connect()`, `write()` and `read()`

Getting the assigned memory limit for coredump, where c means coredump
`ulimit -c`
Setting the assigned memory limit for coredump to unlimited
`ulimit -c unlimited`

Compress a file and keep original
`bzip2 -k <file>`

`malloc()` uses:
1. `brk()` for small memory allocation in a single contiguous chunk of virtual address space.
2. `mmap()` for big memory allocation into the heap in independent regions of memory.
3. `free()` does not use `munmap()` as `free()` is a standard library c function that doesn't need to deallocate the memory from kernel, it is enough that it marks this address to be reusable in the scope of the c application.

Linux OS handles the following:
* processes
* threads
* files
* networking sockets (a type of IPC)
* inter-process communication
* signals
* terminals
* I/O devices

BIOS (developed by IBM) booting firmware is now replaced by UEFI.

A process can have the following states:
* Created
* Waiting (waiting to be selected by the scheduler)
* running
* blocked (blocked on some resource, i.e. another process is reading from slow I/O device therefore it cannot run this process, after it is unblocked, it goes to waiting state again)
* terminated

Registers:
* status registers (PC, IR, ...)
* general purpose registers (r1, r2, ..., the size of these registers determines the CPU word size, any operation reading/writing/processing data from memory shall be copied here)
* cache memory (SRAM memory used to copy data chunks from DRAM as this is faster than copying only specific bytes besides the fetched data are normally relevant and used in the application, this memory is intermediate between DRAM and GP registers)
* memory (DRAM which needs to be refreshed periodically)

Endianess:
* little endian was used in the past for architectural reasons, now it continued as a legacy i.e. **x86** from Intel and **PowerPC**
* big endian is more logical as if the data 0x12345678 needs to be written to memory (0xa 0xa+1 0xa+2 0xa+3), then this is 1 to 1 mapping, LSB 0x78 will be written to address highest address i.e. 0xa+3, it is used in **ARM**

I/O address:
* memory mapped: advantage is to use the same instructions for accessing memory with the I/O devices
* port mapped: a special decoder is used for the port address lines to decode which device is selected, the other address lines are mapped to the memory, i.e. if the address size is 16-bit, then 2 bits can be reserved for I/O and 14 bits for the memory.

Definitions:
* byte size: 8 bits, there were some conventions in the past for 7 bits
* word size: general purpose register size
* address size: the size of adress that can be allocated, they are stored normally in 64 bits but in the architectural specification only the low-order 48 bits are implemented
