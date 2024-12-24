<div class="absolute w-full m-0 p-0 bg-slate-50">
    <div class="grid grid-cols-main p-10 max-w-screen-xl m-auto">
        <!-- Left panel -->
        <div class="pr-5">
            <img 
                src="chace with eye tracker.jpg" 
                class="w-full mb-5 overflow-clip rounded-lg" 
                alt="Chace wearing a Pupil Labs Neon eye tracker."
                title="Chace wearing a Pupil Labs Neon eye tracker."
            >

            <p class="text-right right-0 text-3xl">Chace Caven</p>
            <p class="text-right right-0 text-xl">CS + Math</p>
            <p class="text-right right-0 text-xl">Georgia Institute of Technology</p>

        </div>
        <!-- Right panel -->
        <div class="pl-10">
            <div>
                <h1 class="text-3xl mb-2">Hi.</h1>
                
                <p class="text-xl py-2">
                    My goal is to invent 
                    <span class="font-semibold text-blue-400">artificial general intelligence</span>.
                </p>
                
                <p class="text-xl py-2">
                    I pursue this goal by researching 
                    <span class="font-semibold text-red-500">machine learning</span>, 
                    <span class="font-semibold text-green-500">neuroscience</span>, and
                    <span class="font-semibold text-purple-500">early education.</span>
                </p>
                
            </div>

            <div>
                <h1 class="text-xl mb-2 py-2">Here are some of the things I've done.</h1>
                <h2 class="text-2xl py-2 italic">Generative models of spatial and visual information</h2>
                <p class="text-xl py-2">
                    Early in my career, I built drones. In order to make a drone autonomous, it needs to perform 
                    simultaneous <span class="font-semibold">localization</span> and <span class="font-semibold">mapping</span> (SLAM).

                    I was particularly interested in <span class="font-semibold">visual</span> SLAM.
                </p>
                <p class="text-xl py-2">
                    There exist algorithms, such as ORBSLAM, that 
                    (1) take in a stream of images, 
                    (2) extract hard-coded visual features from each image,
                    then (3) track the position of the features over time
                    to (4) estimate the position of the camera and 
                    (5) a sparse point cloud of the environment.
                </p>
                <p class="text-xl py-2">
                    This information is useful to me, a human being who understands how to interpret 
                    point clouds and measure distances through space. It is not as useful to a downstream algorithm.
                    In practice, researchers built another algorithm to process and interpret point clouds.
                </p>
                <p class="text-xl py-2">
                    This project is about creating a new method for performing SLAM without
                    building point clouds or plotted coordinate trajectories. Instead, I use machine learning to build
                    a generative model of vision and spatial information. Read the report <a href="https://api.wandb.ai/links/ccaven/cfhae2y9" class="underline text-blue-500" target="_blank">here</a>.
                </p>
                <h2 class="text-2xl py-2 italic">Self-supervised pretraining of audio spectrogram transformers</h2>
                <h2 class="text-2xl py-2 italic">Evolving small liquid neural networks to uncover neural population dynamics</h2>
                <h2 class="text-2xl py-2 italic">Neurons that fire together, wire together: exploring backpropagation alternatives</h2>
                <h2 class="text-2xl py-2 italic">Model predictive control for non-differentiable systems</h2>
            </div>
        </div>
    </div>
</div>
