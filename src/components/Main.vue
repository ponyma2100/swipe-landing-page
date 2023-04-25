<template>
  <canvas
    id="gradient-canvas"
    class="absolute w-[200%] h-[850px] sm:h-[970px] bg-gradient-to-r from-[#7038ff] from-0.76% via-[#ffba27] via-33.33% to-[#ef009f] to-96.96% -rotate-12 -top-[600px] -left-1/2 -z-10"
  ></canvas>

  <!-- Hero -->
  <div class="hero w-full flex justify-center px-4">
    <div class="two-column section-container">
      <div class="col-left w-full">
        <h1>Payments infrastructure for the world</h1>
        <p class="max-w-md">
          Tons of companies all over the world use Swipe’s seamless platform to
          manage their businesses's entire financial transaction infrastructure
          online.
        </p>
        <div class="flex my-4">
          <button class="primary-button with-icon mr-4">
            Start now
            <img src="/src/assets/images/arrow-right-light.svg" alt="" />
          </button>
          <button class="secondary-button with-icon text-purple2">
            Contact sales
            <img src="/src/assets/images/arrow-right-purple.svg" alt="" />
          </button>
        </div>
      </div>
      <div
        class="col-right w-2/5 md:w-1/2 h-[564px] items-end hidden sm:contents"
      >
        <img
          src="/src/assets/images/hero-phone.png"
          alt=""
          class="h-[450px] md:h-[628px] translate-x-8 md:-translate-y-8"
        />
      </div>
    </div>
  </div>

  <!-- Brand  -->
  <div class="brand w-full flex justify-center">
    <div class="section-container my-16">
      <div
        class="partners grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-y-10"
      >
        <img src="/src/assets/images/instacart.png" alt="Instacart" />
        <img src="/src/assets/images/salesforce.png" alt="Salesforce" />
        <img src="/src/assets/images/amazon.png" alt="Amazon" />
        <img src="/src/assets/images/slack.png" alt="Slack" />
        <img src="/src/assets/images/shopify.png" alt="Shopify" />
        <img src="/src/assets/images/google.png" alt="Google" />
        <img src="/src/assets/images/lyft.png" alt="Lyft" />
        <img src="/src/assets/images/zoom.png" alt="Zoom" />
      </div>
    </div>
  </div>

  <!-- Unified Platform -->
  <div class="unified-section w-full flex justify-center bg-bg-light px-4">
    <div class="section-container py-16">
      <p class="subtitle">Unified platform</p>
      <h2 class="w-full md:w-1/2 mb-4">
        All the payment products you'll ever need
      </h2>
      <div class="two-column">
        <div class="col-left">
          <p>
            We've got everything you'll need and more to build websites and apps
            that handle payments, payouts, and much more. Swipe’s products power
            payments for
            <a href="#">all kinds of retailers</a> ,<a href="#"
              >all kinds of businesses</a
            >
            ,<a href="#">software platforms & marketplaces</a> , and everything
            in between.
          </p>
        </div>
        <div class="col-right">
          <p>
            We also help companies <a href="#">tackle fraud</a> ,
            <a href="#">issue invoices</a>,<a href="#">send virtual</a> and
            <a href="#">physical cards</a>,<a href="#">manage financing</a> ,<a
              href="#"
              >wrangle business spend</a
            >
            , and much more.
          </p>
        </div>
      </div>
      <button
        class="primary-button with-icon bg-purple1 hover:bg-primary-accent"
      >
        Start now
        <img src="/src/assets/images/arrow-right-light.svg" alt="" />
      </button>
    </div>
  </div>

  <!-- Graphic -->
  <div class="graphic-section w-full flex justify-center bg-bg-light">
    <div class="section-container flex">
      <div class="flex flex-col m-4">
        <img
          src="/src/assets/images/credit-card.png"
          alt=""
          class="my-4 shadow-standard"
        />
        <img
          src="/src/assets/images/phone.png"
          alt=""
          class="my-4 shadow-standard w-4/5"
        />
      </div>
      <div class="flex flex-col m-4">
        <img
          src="/src/assets/images/slack-invoice.png"
          alt=""
          class="my-4 shadow-standard"
        />
        <img
          src="/src/assets/images/dash.png"
          alt=""
          class="my-4 shadow-standard"
        />
      </div>
    </div>
  </div>

  <!-- Inegrations -->
  <div
    class="integrations-section relative py-8 px-4 md:py-48 w-full flex justify-center z-10 before:h-[980px] md:before:h-[1100px] before:w-full before:bg-primary-accent before:absolute before:-top-8 before:left-0 before:-z-10 before:-skew-y-12"
  >
    <div class="section-container two-column text-primary-light">
      <div class="col-left">
        <p class="subtitle2">Designed For Engineers</p>
        <h2>The world’s best and most intuitive APIs</h2>
        <p>
          We abstract the hard stuff away so your teams don't can focus on
          building good technology, instead of spending time and money
          reinventing the wheel.
        </p>
        <button
          class="primary-button with-icon bg-blue1 text-primary-accent mt-2 hover:bg-white"
        >
          Start now
          <img src="/src/assets/images/arrow-right-dark.svg" alt="" />
        </button>

        <div class="flex flex-col md:flex-row">
          <div class="card my-8">
            <img src="/src/assets/images/tools-icon.png" alt="" class="icon" />
            <h3>Tools for all stacks</h3>
            <p class="secondary-text">
              We offer front end and back end libraries in some of the most
              widely used technologies, old and new.
            </p>
            <button class="secondary-button with-icon text-blue1">
              See libraries
              <img src="/src/assets/images/arrow-right-blue.svg" alt="" />
            </button>
          </div>
          <div class="card my-8">
            <img src="/src/assets/images/cube-icon.png" alt="" class="icon" />
            <h3>Custom Integrations</h3>
            <p class="secondary-text">
              Use integrations for systems like Shopify, WooCommerce, NetSuite,
              and more.
            </p>
            <button class="secondary-button with-icon text-blue1">
              Explore partners
              <img src="/src/assets/images/arrow-right-blue.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-right hidden sm:flex">
        <img
          src="/src/assets/images/api-code.png"
          alt=""
          class="max-w-[470px] rounded-3xl mb-4"
        />
        <img
          src="/src/assets/images/terminal-code.png"
          alt=""
          class="max-w-[470px] rounded-3xl"
        />
      </div>
    </div>
  </div>

  <!-- Why Swipe -->
  <div class="why-swipe-section w-full flex justify-center px-4 py-16 sm:py-48">
    <div class="section-container">
      <p class="subtitle">Why Swipe</p>
      <h2>A tech-first approach to finance</h2>
      <div class="flex flex-wrap md:flex-nowrap my-8">
        <div
          class="card w-full sm:w-1/2 md:w-1/4 p-0 md:pr-2 mx-0 my-4 md:mr-4"
        >
          <img src="/src/assets/images/cloud-icon.png" alt="" class="icon" />
          <h3>Efficient Always</h3>
          <p class="text-base text-primary-dark">
            We've optimized every level of the finance stack, from integrations
            to prebuilt checkout flows - no detail has been spared.
          </p>
        </div>
        <div class="card w-full sm:w-1/2 md:w-1/4 p-0 md:pr-2 m-0 md:mr-4">
          <img src="/src/assets/images/cycle-icon.png" alt="" class="icon" />
          <h3>Fast-Improving</h3>
          <p class="text-base text-primary-dark">
            We make constant updates and improvements to help you stay on the
            cutting edge of your industry, deploying to production around 20X
            per day!
          </p>
        </div>
        <div class="card w-full sm:w-1/2 md:w-1/4 p-0 md:pr-2 m-0 md:mr-4">
          <img src="/src/assets/images/shield-icon.png" alt="" class="icon" />
          <h3>Tried and true</h3>
          <p class="text-base text-primary-dark">
            Our systems operate with 100% uptime, with scalability and uptime as
            a guarantee. Swipe is super duper certified so don't worry
          </p>
        </div>
        <div class="card w-full sm:w-1/2 md:w-1/4 p-0 md:pr-2 m-0 md:mr-4">
          <img src="/src/assets/images/bars-icon.png" alt="" class="icon" />
          <h3>Crazy Optimized</h3>
          <p class="text-base text-primary-dark">
            We use machine learning trained on billions of data points to help
            optimize all products, from fraud to revenue recovery and more.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Global scale -->
  <div
    class="global-section relative w-full flex justify-center px-4 pt-8 sm:pt-36 text-primary-light before:h-[1200px] before:w-full before:-top-8 before:left-0 before:bg-primary-accent before:absolute before:-skew-y-12 before:-z-10"
  >
    <div class="section-container">
      <div class="two-column">
        <div class="col-left">
          <p class="subtitle2">Global scale</p>
          <h2>A structure for global businesses</h2>
          <p>
            Swipe makes moving money simple, borderless, and programmable - just
            like the rest of the internet. We have teams all over the world and
            we process billions and billions of dollars yearly for
            <a href="#" class="text-blue1 hover:text-primary-light"
              >startups, Fortune 500s, and everything in between.</a
            >
          </p>
        </div>
        <div class="col-right">
          <img
            src="/src/assets/images/global-graphic.png"
            alt=""
            class="absolute top-0 opacity-10 sm:opacity-25 max-w-2xl"
          />
        </div>
      </div>
      <div class="flex flex-wrap md:flex-nowrap w-full max-w-6xl my-8 md:my-32">
        <div
          class="card w-full sm:w-1/2 md:w-1/4 md:pr-2 mx-4 my-4 sm:mx-0 md:mx-4"
        >
          <h3 class="border-l-2 border-blue1 pl-4 leading-7">250M+</h3>
          <p class="secondary-text">
            API requests each day, peaking at 15,000 requests a second.
          </p>
        </div>
        <div
          class="card w-full sm:w-1/2 md:w-1/4 md:pr-2 mx-4 my-4 sm:mx-0 md:mx-4"
        >
          <h3 class="border-l-2 border-blue1 pl-4 leading-7">97%</h3>
          <p class="secondary-text">
            of US adults have bought from businesses that use Swipe
          </p>
        </div>
        <div
          class="card w-full sm:w-1/2 md:w-1/4 md:pr-2 mx-4 my-4 sm:mx-0 md:mx-4"
        >
          <h3 class="border-l-2 border-blue1 pl-4 leading-7">135+</h3>
          <p class="secondary-text">currencies and payment methods supported</p>
        </div>
        <div
          class="card w-full sm:w-1/2 md:w-1/4 md:pr-2 mx-4 my-4 sm:mx-0 md:mx-4"
        >
          <h3 class="border-l-2 border-blue1 pl-4 leading-7">35+</h3>
          <p class="secondary-text">
            countries with local, acquiring, optimizing acceptance rates
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Virtual section -->
  <div
    class="virtual-section relative w-full flex justify-center px-4 sm:pt-32 before:h-full before:w-full before:top-0 before:bg-white before:absolute before:-z-10"
  >
    <div class="section-container two-column justify-start">
      <div class="col-left h-[446px] pr-16">
        <div class="subtitle">Virtual events</div>
        <h2>Check out Sessions now!</h2>
        <p>
          Swipe Sessions is our annual conference - it's now available to watch
          on demand! Check it out and become an "internet economy" genius, and
          see how Swipe can transform the way you do business online.
        </p>
        <button
          class="primary-button with-icon bg-purple1 hover:bg-primary-accent mt-4"
        >
          Start now
          <img src="/src/assets/images/arrow-right-light.svg" alt="" />
        </button>
      </div>
      <div
        class="col-right p-0 w-full sm:w-[540px] h-[446px] shadow-standard rounded-2xl overflow-hidden"
      >
        <div
          class="card-top relative w-full h-2/5 sm:h-1/2 flex justify-center items-center before:w-full before:h-[150%] before:absolute before:-skew-y-6 before:bg-gradient-to-r from-[#08209a] from-0.76% via-[#6563ff] via-33.33% to-[#83e2ff] to-96.96% before:-top-[40%] before:z-0"
        >
          <img
            src="/src/assets/images/swipe-sessions.png"
            alt=""
            class="z-10 w-72 sm:w-80"
          />
          <div class="flex avatars absolute -bottom-16 left-16 z-10">
            <img src="/src/assets/images/avatar1.png" alt="" class="w-20" />
            <img
              src="/src/assets/images/avatar2.png"
              alt=""
              class="absolute w-20 left-14"
            />
          </div>
        </div>
        <div class="card-bottom w-full h-1/2 box-border p-16">
          <p class="subtitle">Keynote</p>
          <p class="text-base font-bold text-primary-dark w-full sm:w-1/2">
            Everything you need to know about the internet economy
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Getting start section -->
  <div class="getstart w-full flex justify-center py-20 px-4">
    <div class="section-container two-column">
      <div class="col-left pr-16">
        <h2>What are you waiting for?</h2>
        <p>
          Explore <a href="#">Swipe</a> now, or create an account and start
          accepting payments today! If you need a custom package for your
          business, let's chat today.
        </p>
        <button
          class="primary-button with-icon bg-purple1 hover:bg-primary-accent"
        >
          Start now
          <img src="/src/assets/images/arrow-right-light.svg" alt="" />
        </button>
      </div>
      <div class="col-right flex-row flex-wrap justify-start md:flex-nowrap">
        <div class="card mr-2 p-0 box-border w-full md:w-1/2">
          <img src="/src/assets/images/shield-icon.png" alt="" class="icon" />
          <h3>Always know what you pay</h3>
          <p class="secondary-text">
            Integrated per-transaction pricing with no hidden fees.
          </p>
          <button class="secondary-button with-icon text-purple2">
            Pricing details
            <img src="/src/assets/images/arrow-right-purple.svg" alt="" />
          </button>
        </div>
        <div class="card box-border md:ml-8 w-full md:w-1/2">
          <img src="/src/assets/images/bars-icon.png" alt="" class="icon" />
          <h3>Start your integration</h3>
          <p class="secondary-text">
            Get up and running with Stripe in as little as 10 minutes.
          </p>
          <button class="secondary-button with-icon text-purple2">
            API reference
            <img src="/src/assets/images/arrow-right-purple.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="w-full flex justify-center bg-bg-light px-4 py-16">
    <div class="section-container flex flex-wrap">
      <div class="col w-1/2 sm:w-1/4 pb-4">
        <img
          src="/src/assets/images/logo-dark.svg"
          alt=""
          class="max-w-[108px] mb-4 w-20"
        />
        <div class="flex items-center my-4">
          <img
            src="/src/assets/images/location-icon.png"
            alt=""
            class="w-4 sm:w-6"
          />
          <a href="#" class="text-primary-dark font-normal">United States</a>
        </div>
        <div class="flex items-center">
          <img
            src="/src/assets/images/comment-icon.png"
            alt=""
            class="w-4 sm:w-6"
          />
          <a href="#" class="text-primary-dark font-normal"
            >English (United States)</a
          >
        </div>
      </div>
      <div class="col w-1/2 sm:w-1/4 flex flex-col item-start pb-4">
        <h3 class="text-2xl font-bold">Products</h3>
        <ul>
          <li><a href="#">Atlas</a></li>
          <li><a href="#">Billing</a></li>
          <li><a href="#">Invoicing</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Checkout</a></li>
          <li><a href="#">Identity</a></li>
        </ul>
      </div>
      <div class="col w-1/2 sm:w-1/4 pb-4">
        <h3 class="text-2xl font-bold">Use Cases</h3>
        <ul>
          <li><a href="#">eCommerce</a></li>
          <li><a href="#">SaaS</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Embedded Finance</a></li>
          <li><a href="#">Crypto</a></li>
          <li><a href="#">Creator Economy</a></li>
        </ul>
      </div>
      <div class="col w-1/2 sm:w-1/4 pb-4">
        <h3 class="text-2xl font-bold">Resources</h3>
        <ul>
          <li><a href="#">Support Center</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Licenses</a></li>
          <li><a href="#">Privacy & Terms</a></li>
          <li><a href="#">Cookie Settings</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import "../../gradient";
</script>
<style scoped>
#gradient-canvas {
  --gradient-color-1: #ef009f;
  --gradient-color-2: #6ec3f4;
  --gradient-color-3: #7038ff;
  --gradient-color-4: #ffba27;
}
</style>
