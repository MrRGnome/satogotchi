# Satogochi Architecture and Design Planning
To participate please join us at https://discord.gg/bitcoin-discord-782749290219962370

# Game Flow Proposal
Satogotchi (here-on Sato) is a simple digital pet. They begin life as a newly hatched egg. They begin life as a baby digital pet. They must be fed random data to grow, their favourite is dice rolls. Once they eat 256 bits of random data Sato grows. As Sato loves the user, and gives them a friendship bracelet in the form of a file and shared secret word selected by the user so the user and Sato will always recognize each other. Sato instructs the users on secret and safe places the user might store the backup and of the consequences of loss, and from this moment forward will require the user input their "friendship bracelet" when doing any sensitive actions.

# Achievements
The user is prompted with challenges to achieve. Going for a walk (sending a transaction), Going for a run (sending a lightning tx), Walking on the treadmill (sending a testnet TX), Going for a walk with a friend (Signing a PSBT multisig), walking to the pet store (use an integrated website or service, ex. testnet.yalls.org, integrating a new service like a block explorer).

# PAW Proposal:
Describe possible satogotchi interactions and associated Bitcoin API calls. This takes the form of a Pet Action Workflow or PAW JSON file. Each PAW file describes a series of ENUM state flag which triggers a corresponding animation, action, or prompt. Animations call the animation engine to the corresponding state. actions call outside the HTML game state to the electron pipe, Bitcoin API, or remote API. Prompts call user input from inside the game engine. An example PAW might look like:

```
    {

    }
```