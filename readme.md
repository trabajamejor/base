# Features

- User Abstract
- Roles and Permissions
- Testing TestCase and Trait
- Basic Assest (Inspinia 2.7)

## Installation

### Step 1: Composer

On package.json add this before require

```
"repositories": [
    {
        "type": "vcs",
        "url":  "git@bitbucket.org:trabajamejor/base.git"
    }
]
```

And add this on require

```
"require": {
    "trabajamejor/base": "dev-master"
},
```

Then run

```
composer update
```

### Step 2: Service Provider

For your Laravel app, open `config/app.php` and, within the `providers` array, append:

```
TrabajaMejor\Base\BaseServiceProvider::class
```

This will bootstrap the package into Laravel.

### Step 3: Publish Views

Run command:

```
php artisan vendor:publish
```

This will bootstrap the package into Laravel.