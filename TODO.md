
# Things to do

- [x] demonstrate loading from a fake protocol into an `iframe`
- [x] create a `BrowserView` that's attached to an element that can load from `ipfs`
- [ ] set up js-ipfs and integrate it such that it works
- [ ] outside of the app (in scratch code)
    - [ ] publish a few small entries as their own blocks (CAR?)
    - [ ] publish a list of them as IPLD lists of links
    - [ ] resolve an IPNS to that list of links (and make it easy to update)
- [ ] in the app
    - [ ] store some IPNS to pull from
    - [ ] render feed entries
        - [ ] pure text entry (or just MD?)
        - [ ] HTML+files entry, including metadata extraction to show in small and the full thing
    - [ ] make it easy to post new entries
        - [ ] pure text
        - [ ] a simple HTML+file variant
        - [ ] update IPLD list, including pagination
        - [ ] IPNS updating

## `BrowserView` woes

Using `webview` isn't great but attaching `BrowserView` to an element is extremely painful at best,
if it can even be made to work reliably without a big pile of hacks.

Instead, we could have a dual mode:
* `entry-card` when in embedded mode renders a summary of sorts
* and when in full mode it runs as the full thing

The downside is that this doesn't really give us composability.


## Later

  // - [ ] the IPNS needs to be made available for copying from the UI
  // - [ ] when we create an IPNS for feeds, we can also make a QR code for them, to be easily followed!


- [ ] Compare with IPP and Dave's thing

- [ ] resolve an IPID DID to the IPNS-resolved feed
- [ ] self-modifying entries?
- [ ] installable entries
- [ ] intents?
    - [ ] would it make sense to make intents controlled via UCANs? Different sources could have different
        wiring.
