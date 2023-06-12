<script>
export default {
    name: "Navbar",
    data() {
        return {
            access_token: "",
            search: "",
        }
    },
}
</script>

<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <RouterLink to="/">
                        <li>
                            Home
                        </li>
                    </RouterLink>
                    <RouterLink to="/">
                        <li>
                            Game of Thrones
                        </li>
                    </RouterLink>
                </ul>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <RouterLink to="/">
                <li>
                    Home
                </li>
                </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                <li>
                    Game of Thrones
                </li>
                </RouterLink>
                </li>
            </ul>
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-bordered" />
                    <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="navbar-end">

        </div>
    </div>
</template>