https://whatismyipaddress.com/smtp

The Mailman Inside Our Computers. Or:
What Is Simple Mail Transfer Protocol?

Almost all of your online activity is made possible through the help of protocols—
the special networking-software rules and guidelines 
that allow your computer to link up to networks 
everywhere so you can shop, read news, send email and more. 
(Your IP address, which stands for Internet Protocol, is just one of many.)

The protocols are vital to your networking activity 
and, fortunately for you, 
you don-t need to 
	manage, 
	install 
	or even think about 
	them. 
They-re built in to the networking software on your computers. 
Thank goodness for advanced technology and IT geniuses!

Still, 
every once in a while, 
you may find yourself having to learn about a protocol—
such as your IP address. 
That-s the case with a term that affects every email you-ve ever sent out in your entire life—Simple Mail Transfer Protocol, or SMTP. 
Without it, 
your emails would go nowhere.

What is SMTP?
=============
SMTP is part of the application layer of the TCP/IP protocol. 
Using a process called "store and forward," 
SMTP moves your email on and across networks. 
It works closely with something called the Mail Transfer Agent (MTA) 
to send your communication to the right computer and email inbox.

SMTP spells out and directs how your email moves from your computer-s MTA to an MTA on another computer, and even several computers. 
Using that "store and forward" feature mentioned before, 
the message can move in steps from your computer to its destination. 
At each step, SMTP is doing its job. 
Lucky for us, this all takes place behind the scenes, 
and we don-t need to understand or operate SMTP.

SMTP at work.
=============
SMTP provides a set of codes 
that simplify the communication of email messages 
between email servers 
(the network computer that handles email coming to you and going out). 
It-s a kind of shorthand that allows a server to break up different parts of a message into categories 
the other server can understand. 
When you send a message out, 
it-s turned into strings of text 
that are separated by the code words (or numbers) 
that identify the purpose of each section.

SMTP provides those codes, 
and email server software is designed to understand what they mean. 
As each message travels towards its destination, 
it sometimes passes through a number of computers 
as well as their individual MTAs. 
As it does, 
it-s briefly stored before it moves on to the next computer in the path. 
Think of it as a letter going through different hands 
as it winds its way to the right mailbox.

Nothing fancy about it.
SMTP is able to transfer only text 
— it isn-t able to handle fonts, graphics, attachments, etc.—maybe that-s why it-s called simple. 
Fortunately, 
MIMEs (Multipurpose Internet Mail Extensions) were created to lend a hand. 
MIME encodes all the non-text content into plain text. 
In that transformed format, 
SMTP is coaxed into transferring the data.

SMTP sometimes stands for "stop."
Most of us don-t know this, 
but our ISPs* // (Internet Service Providers)
typically have a limit to the number of emails we can send out 
over a certain amount of time. 
Most of the time, 
it-s limited to a set number per hour or per day.

Each ISP relies on its SMTP 
to determine (and govern) 
the email that can be sent out by one connection. 
(It is a protocol, after all.) For some people who work at home or manage large mailing lists, that could be a problem. After they hit their limit, the ISP will simply stop sending emails. If they think you-re a spammer, they might even shut down your account.

That email limit varies by ISP. 
For example, 
the typical Comcast Cable Internet customer is limited to 1,000 emails per day. (Their business customers have a limit of 24,000 emails daily.) Verizon and AT&T do it differently. They put a limit of 100 on the number of recipients you can have on one sent email.

If you-re curious about your ISP-s limit, check their policy.


=======================
ISP