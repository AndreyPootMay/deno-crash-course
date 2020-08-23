## Deno JS Course.

Based on the excersises of the [FreeCodeCamp Channel video](https://www.youtube.com/watch?v=TQUy8ENesGY).

## Lessons tooked in this course:

01. Typescript Basics.
02. Features.
03. File System.
04. Server Https.
05. Using npm packages.
06. Answers on commmon questions.

### Advices:
In this course I use my enviroment with the next especifications:

```bash
    deno 1.3.1
    v8 8.6.334
    typescript 3.9.7
```

You can check you Deno enviroment running the next command: `deno --version`

---

## Deno security flags

Some projects would need to add some flags after the `deno run` command. Simple, this flags are for protect the enviroment where you execute the code with certain privileges.

The following permissions are available:

> `-A`, `--allow-all` Allow all permissions. This disables all security.

> `--allow-env` Allow environment access for things like getting and setting of environment variables.

> `--allow-hrtime` Allow high-resolution time measurement. High-resolution time can be used in timing attacks and fingerprinting.

> `--allow-net=<allow-net>` Allow network access. You can specify an optional, comma-separated list of domains to provide an allow-list of allowed domains.

> `--allow-plugin` Allow loading plugins. Please note that --allow-plugin is an unstable feature.

> `--allow-read=<allow-read>` Allow file system read access. You can specify an optional, comma-separated list of directories or files to provide a allow-list of allowed file system access.

> `--allow-run` Allow running subprocesses. Be aware that subprocesses are not run in a sandbox and therefore do not have the same security restrictions as the deno process. Therefore, use with caution.

> `--allow-write=<allow-write>` Allow file system write access. You can specify an optional, comma-separated list of directories or files to provide a allow-list of allowed file system access.

More information about permissions in the [deno-land docs](https://deno.land/manual/getting_started/permissions)

Here is a little list of this exercises:

```bash
deno run --allow-net \02_features\05_browser_api\fetch.ts
deno run --allow-read --allow-write .\03_fs\main.ts
deno run --allow-net .\04_server_https\main.ts
deno run --allow-read --unstable --allow-env main.ts
```