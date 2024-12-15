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
# or
make index-data-processed

# Run test queries (only works on data-subset)
make all-queries
```

### Run website

Allow CORS in your browser:
[Chrome](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
| 
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)

Open [website/index.html](./website/index.html) in your browser