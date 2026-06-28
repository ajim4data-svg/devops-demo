console.log("AI DevOps Portfolio Loaded 🚀");

function askAI() {

    const question = document.getElementById("user-question").value.toLowerCase();

    const response = document.getElementById("ai-response");

    if(question.includes("kubernetes")){

        response.innerHTML =
        "🚀 Kubernetes is an orchestration platform used to deploy, scale and manage containerized applications automatically.";

    }

    else if(question.includes("docker")){

        response.innerHTML =
        "🐳 Docker is used to build lightweight containers so applications run consistently everywhere.";

    }

    else if(question.includes("terraform")){

        response.innerHTML =
        "🏗️ Terraform is an Infrastructure as Code tool used to provision AWS, Azure and GCP resources.";

    }

    else if(question.includes("aws")){

        response.innerHTML =
        "☁️ AWS is my primary cloud platform. I have hands-on experience with EC2, IAM, VPC, EKS, S3 and Cloud Infrastructure.";

    }

    else if(question.includes("azure")){

        response.innerHTML =
        "🔷 Microsoft Azure is another cloud platform where I work with Azure DevOps, Virtual Machines, Networking and Cloud Services.";

    }

    else if(question.includes("github")){

        response.innerHTML =
        "⚙️ GitHub Actions helps automate CI/CD pipelines including Build, Test and Deployment.";

    }

    else if(question.includes("devops")){

        response.innerHTML =
        "🔥 DevOps combines Development, Automation, CI/CD, Docker, Kubernetes, Terraform, Monitoring and Cloud Technologies.";

    }

    else if(question.includes("ai")){

        response.innerHTML =
        "🤖 I am currently building AI powered DevOps solutions using Generative AI, RAG and Cloud technologies.";

    }

    else{

        response.innerHTML =
        "😊 Thanks for your question! Currently my AI assistant can answer questions about AWS, Azure, Docker, Kubernetes, Terraform, GitHub, DevOps and AI.";

    }

}