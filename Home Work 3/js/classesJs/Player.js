	class Player extends Device {

		constructor () {
			super();
			this._volume = 5;
			this._playState = false;
		}// model, 

		increaseVolume () {
			this.doIfDeviceOn( ()=>{
				if(this._volume < 100)
					this._volume += 5;
				this.render();
			} );
			console.dir(this);			
		}

		decreaseVolume () {
			this.doIfDeviceOn( ()=>{
				if(this._volume >=5)
					this._volume -= 5;
				this.render();
			} );
			console.dir(this);
		}

		set volume (level) {
			this.doIfDeviceOn( ()=>{
				if(typeof level != "number"){
					console.log( "must be typeof(volume) == \"number\"" )
					return;
				}

				if(level > 100){
					console.log( "must be 0 < volume >= 100" );
					return;
				}

				this._volume = level;
			} );
			console.dir(this);
		}

		get volume () {
			return this._volume;
		}

		showVolume () {
			this.doIfDeviceOn( ()=>{console.dir(this._volume)} );
		}

		play () {
			this.doIfDeviceOn( ()=>{this._playState = true;} );
			this.render();
			console.dir(this);
		}

		get playState () {
			return this._playState;
		}


		stop () {
			this.doIfDeviceOn( ()=>{this._playState = false} );
			this.render();
			console.dir(this);	
		}


		
	}