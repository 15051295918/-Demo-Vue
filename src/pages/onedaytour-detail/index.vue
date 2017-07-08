<template>
    <div class="main">

        <!--老纪-->
        <index-header :scrollTop="scrollTop"></index-header>
        <user-reviews></user-reviews>

        <!--武鹤-->
        <index-tabs :scrollTop="scrollTop"></index-tabs>

        <!--国辉-->
        <index-footer></index-footer>

        <!--坤勇-->
        <booking-ticket></booking-ticket>

    </div>
</template>

<script>
    import Header from './header/header';
    import UserReviews from './header/user-reviews';
    import Tabs from './tabs/tabs';
    import Footer from './footer/footer';
    import BookingTicket from './booking-ticket/booking-ticket';

    export default {

        data() {
            return {
                scrollTop: 0
            }
        },
        components: {
            "index-header": Header,
            "user-reviews": UserReviews,
            "index-tabs": Tabs,
            "index-footer": Footer,
            "booking-ticket": BookingTicket
        },
        mounted() {
            var this_ = this;
            window.addEventListener('scroll', function () {
                this_.scrollTop = document.body.scrollTop;
                console.log(document.body.scrollTop)
            }, false);
        }
    }

</script>


<style scoped>
    .main {
        background: #f5f5f5;
    }
</style>