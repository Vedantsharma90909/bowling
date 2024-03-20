AFRAME.registerComponent("throw",{
    init:function(){
        this.ball_throw()
    },
    ball_throw:function(){
        window.addEventListener("keydown" ,(e) => {
            if(e.key==="z"){
                const bullet_entity = document.createElement("a-entity")
                bullet_entity.setAttribute("geometry",{primitive:"sphere",radius:0.5})
                bullet_entity.setAttribute("material","color","black")
                const camera = document.querySelector("#camera")
                var camera_1 = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera_1.getWorldDirection(direction) 
                console.log(direction)
                var position = camera.getAttribute("position")
                bullet_entity.setAttribute("position",{x:0,y:-1,z:0})
                bullet_entity.setAttribute("velocity",direction.multiplyScalar(-10))
                bullet_entity.setAttribute("dynamic-body",{shape:"sphere",mass:0})
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet_entity)
            }
        })
    }
})