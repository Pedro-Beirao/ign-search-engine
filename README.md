# PRI

### Install required libraries

```bash
pip install -r requirements.txt
```

### Run docker image

```bash
# Start image
make up

# Index data
make index-data-subset

# Run test queries
make all-queries
```

### Run website

Allow CORS in your browser:
[Chrome](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
| 
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)

Open [website/index.html](./website/index.html) in your browser