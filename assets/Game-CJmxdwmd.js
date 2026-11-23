import{c as Ts,S as kn,N as Nt,C as Pe,F as Wa,V as be,R as As,a as _t,w as Vt,M as Ft,W as sn,b as st,L as hn,H as Bn,U as jt,D as pt,B as xt,d as on,t as Rs,e as ys,f as Gn,p as ws,g as Cs,E as Ps,h as ut,P as mn,A as Ds,i as Xn,j as Ut,k as Un,l as gi,m as xn,n as Mn,o as Xa,q as Ls,r as tn,s as In,u as Us,v as Is,x as dn,O as Ns,y as Os,z as Fs,G as ks,I as Bs,J as Gs,K as Hs,Q as zs,T as Vs,X as Ws,Y as Xs,Z as qs,_ as Ks,$ as Ys,a0 as $s,a1 as Zs,a2 as js,a3 as Qs,a4 as qn,a5 as nn,a6 as Rn,a7 as Js,a8 as gn,a9 as eo,aa as to,ab as no,ac as io,ad as qa,ae as ao,af as so,ag as oo,ah as ro,ai as ze,aj as co,ak as lo,al as fo,am as kt,an as yt,ao as Yt,ap as Je,aq as Ka,ar as $t,as as Dt,at as Nn,au as Ya,av as $a,aw as Za,ax as cn,ay as uo,az as ho,aA as po,aB as ja,aC as qt,aD as mo,aE as go,aF as _o,aG as vo,aH as xo,aI as Qa,aJ as Mo,aK as Ja,aL as es,aM as Kn,aN as Yn,aO as $n,aP as Zn,aQ as je,aR as Pi,aS as Di,aT as Li,aU as Ui,aV as Ii,aW as Ni,aX as Oi,aY as Fi,aZ as ki,a_ as Bi,a$ as Gi,b0 as Hi,b1 as zi,b2 as Vi,b3 as Wi,b4 as Xi,b5 as qi,b6 as Ki,b7 as Yi,b8 as $i,b9 as Zi,ba as jn,bb as ji,bc as Qi,bd as So,be as Ji,bf as ea,bg as ta,bh as si,bi as oi,bj as ri,bk as ci,bl as li,bm as fi,bn as di,bo as Eo,bp as na,bq as bo,br as Dn,bs as To,bt as ia,bu as aa,bv as sa,bw as ui,bx as hi,by as Ao,bz as ts,bA as Ro,bB as Hn,bC as yo,bD as wo,bE as ns,bF as _i,bG as oa,bH as is,bI as ra,bJ as as,bK as Sn,bL as rn,bM as Co,bN as It,bO as Po,bP as Do,bQ as Lo,bR as ca,bS as gt,bT as Uo,bU as ss,bV as Io,bW as No,bX as Oo,bY as os,bZ as Fo,b_ as ko,b$ as Bo,c0 as Go,c1 as Ho,c2 as zo,c3 as Vo,c4 as Wo,c5 as Xo,c6 as qo,c7 as Ko,c8 as Zt,c9 as vi,ca as En,cb as Yo,cc as rs,cd as cs,ce as ls,cf as xi,cg as bn,ch as At,ci as On,cj as Kt,ck as $o,cl as fs,cm as Mi,cn as lt,co as Ye,cp as Zo,cq as pi,cr as jo,cs as Qo,ct as _n,cu as la,cv as Jo,cw as er,cx as tr,cy as nr,cz as ir,cA as Si,cB as fa,cC as ar,cD as Ot,cE as sr,cF as Fn,cG as Lt,cH as da,cI as Ie,cJ as ct,cK as vn,cL as ua,cM as ha,cN as or,cO as rr,cP as cr,cQ as lr,cR as fr,cS as dr,cT as ur,cU as hr,cV as pr,cW as Qn,cX as pa,cY as ma,cZ as un,c_ as mr,c$ as yn,d0 as ga,d1 as _a,d2 as gr,d3 as _r,d4 as vr,d5 as xr}from"./index-DSnc2Agb.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ds(){let i=null,e=!1,t=null,n=null;function a(s,o){t(s,o),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mr(i){const e=new WeakMap;function t(r,f){const d=r.array,l=r.usage,c=d.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,d,l),r.onUploadCallback();let h;if(d instanceof Float32Array)h=i.FLOAT;else if(d instanceof Uint16Array)r.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)h=i.SHORT;else if(d instanceof Uint32Array)h=i.UNSIGNED_INT;else if(d instanceof Int32Array)h=i.INT;else if(d instanceof Int8Array)h=i.BYTE;else if(d instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:h,bytesPerElement:d.BYTES_PER_ELEMENT,version:r.version,size:c}}function n(r,f,d){const l=f.array,c=f.updateRanges;if(i.bindBuffer(d,r),c.length===0)i.bufferSubData(d,0,l);else{c.sort((h,x)=>h.start-x.start);let g=0;for(let h=1;h<c.length;h++){const x=c[g],E=c[h];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++g,c[g]=E)}c.length=g+1;for(let h=0,x=c.length;h<x;h++){const E=c[h];i.bufferSubData(d,E.start*l.BYTES_PER_ELEMENT,l,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const f=e.get(r);f&&(i.deleteBuffer(f.buffer),e.delete(r))}function o(r,f){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const l=e.get(r);(!l||l.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const d=e.get(r);if(d===void 0)e.set(r,t(r,f));else if(d.version<r.version){if(d.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,r,f),d.version=r.version}}return{get:a,remove:s,update:o}}var Sr=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Er=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,br=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tr=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ar=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rr=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yr=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cr=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pr=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ur=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ir=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nr=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Or=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Br=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wr=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xr=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qr=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$r=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zr=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qr=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jr=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ic=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ac=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_c=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ec=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ac=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rc=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ic=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$c=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,el=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,il=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,al=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ol=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ll=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ul=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ml=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_l=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ml=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,El=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Al=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ll=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ul=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Il=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ol=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$l=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ql=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Sr,alphahash_pars_fragment:Er,alphamap_fragment:br,alphamap_pars_fragment:Tr,alphatest_fragment:Ar,alphatest_pars_fragment:Rr,aomap_fragment:yr,aomap_pars_fragment:wr,batching_pars_vertex:Cr,batching_vertex:Pr,begin_vertex:Dr,beginnormal_vertex:Lr,bsdfs:Ur,iridescence_fragment:Ir,bumpmap_pars_fragment:Nr,clipping_planes_fragment:Or,clipping_planes_pars_fragment:Fr,clipping_planes_pars_vertex:kr,clipping_planes_vertex:Br,color_fragment:Gr,color_pars_fragment:Hr,color_pars_vertex:zr,color_vertex:Vr,common:Wr,cube_uv_reflection_fragment:Xr,defaultnormal_vertex:qr,displacementmap_pars_vertex:Kr,displacementmap_vertex:Yr,emissivemap_fragment:$r,emissivemap_pars_fragment:Zr,colorspace_fragment:jr,colorspace_pars_fragment:Qr,envmap_fragment:Jr,envmap_common_pars_fragment:ec,envmap_pars_fragment:tc,envmap_pars_vertex:nc,envmap_physical_pars_fragment:hc,envmap_vertex:ic,fog_vertex:ac,fog_pars_vertex:sc,fog_fragment:oc,fog_pars_fragment:rc,gradientmap_pars_fragment:cc,lightmap_pars_fragment:lc,lights_lambert_fragment:fc,lights_lambert_pars_fragment:dc,lights_pars_begin:uc,lights_toon_fragment:pc,lights_toon_pars_fragment:mc,lights_phong_fragment:gc,lights_phong_pars_fragment:_c,lights_physical_fragment:vc,lights_physical_pars_fragment:xc,lights_fragment_begin:Mc,lights_fragment_maps:Sc,lights_fragment_end:Ec,logdepthbuf_fragment:bc,logdepthbuf_pars_fragment:Tc,logdepthbuf_pars_vertex:Ac,logdepthbuf_vertex:Rc,map_fragment:yc,map_pars_fragment:wc,map_particle_fragment:Cc,map_particle_pars_fragment:Pc,metalnessmap_fragment:Dc,metalnessmap_pars_fragment:Lc,morphinstance_vertex:Uc,morphcolor_vertex:Ic,morphnormal_vertex:Nc,morphtarget_pars_vertex:Oc,morphtarget_vertex:Fc,normal_fragment_begin:kc,normal_fragment_maps:Bc,normal_pars_fragment:Gc,normal_pars_vertex:Hc,normal_vertex:zc,normalmap_pars_fragment:Vc,clearcoat_normal_fragment_begin:Wc,clearcoat_normal_fragment_maps:Xc,clearcoat_pars_fragment:qc,iridescence_pars_fragment:Kc,opaque_fragment:Yc,packing:$c,premultiplied_alpha_fragment:Zc,project_vertex:jc,dithering_fragment:Qc,dithering_pars_fragment:Jc,roughnessmap_fragment:el,roughnessmap_pars_fragment:tl,shadowmap_pars_fragment:nl,shadowmap_pars_vertex:il,shadowmap_vertex:al,shadowmask_pars_fragment:sl,skinbase_vertex:ol,skinning_pars_vertex:rl,skinning_vertex:cl,skinnormal_vertex:ll,specularmap_fragment:fl,specularmap_pars_fragment:dl,tonemapping_fragment:ul,tonemapping_pars_fragment:hl,transmission_fragment:pl,transmission_pars_fragment:ml,uv_pars_fragment:gl,uv_pars_vertex:_l,uv_vertex:vl,worldpos_vertex:xl,background_vert:Ml,background_frag:Sl,backgroundCube_vert:El,backgroundCube_frag:bl,cube_vert:Tl,cube_frag:Al,depth_vert:Rl,depth_frag:yl,distanceRGBA_vert:wl,distanceRGBA_frag:Cl,equirect_vert:Pl,equirect_frag:Dl,linedashed_vert:Ll,linedashed_frag:Ul,meshbasic_vert:Il,meshbasic_frag:Nl,meshlambert_vert:Ol,meshlambert_frag:Fl,meshmatcap_vert:kl,meshmatcap_frag:Bl,meshnormal_vert:Gl,meshnormal_frag:Hl,meshphong_vert:zl,meshphong_frag:Vl,meshphysical_vert:Wl,meshphysical_frag:Xl,meshtoon_vert:ql,meshtoon_frag:Kl,points_vert:Yl,points_frag:$l,shadow_vert:Zl,shadow_frag:jl,sprite_vert:Ql,sprite_frag:Jl},ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Rt={basic:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:gt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:gt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:gt([ie.points,ie.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:gt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:gt([ie.common,ie.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:gt([ie.sprite,ie.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:gt([ie.common,ie.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:gt([ie.lights,ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Rt.physical={uniforms:gt([Rt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const wn={r:0,b:0,g:0},Ht=new is,ef=new Ft;function tf(i,e,t,n,a,s,o){const r=new Pe(0);let f=s===!0?0:1,d,l,c=null,g=0,h=null;function x(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function E(T){let b=!1;const A=x(T);A===null?u(r,f):A&&A.isColor&&(u(A,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,b){const A=x(b);A&&(A.isCubeTexture||A.mapping===Hn)?(l===void 0&&(l=new Je(new _i(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:oa(Rt.backgroundCube.uniforms),vertexShader:Rt.backgroundCube.vertexShader,fragmentShader:Rt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(l)),Ht.copy(b.backgroundRotation),Ht.x*=-1,Ht.y*=-1,Ht.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ht.y*=-1,Ht.z*=-1),l.material.uniforms.envMap.value=A,l.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ef.makeRotationFromEuler(Ht)),l.material.toneMapped=st.getTransfer(A.colorSpace)!==je,(c!==A||g!==A.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=A,g=A.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new Je(new cn(2,2),new kt({name:"BackgroundMaterial",uniforms:oa(Rt.background.uniforms),vertexShader:Rt.background.vertexShader,fragmentShader:Rt.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=st.getTransfer(A.colorSpace)!==je,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(c!==A||g!==A.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,c=A,g=A.version,h=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function u(T,b){T.getRGB(wn,ns(i)),n.buffers.color.setClear(wn.r,wn.g,wn.b,b,o)}function R(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return r},setClearColor:function(T,b=1){r.set(T),f=b,u(r,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,u(r,f)},render:E,addToRenderList:p,dispose:R}}function nf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=g(null);let s=a,o=!1;function r(v,w,V,U,O){let q=!1;const H=c(U,V,w);s!==H&&(s=H,d(s.object)),q=h(v,U,V,O),q&&x(v,U,V,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(v,w,V,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function f(){return i.createVertexArray()}function d(v){return i.bindVertexArray(v)}function l(v){return i.deleteVertexArray(v)}function c(v,w,V){const U=V.wireframe===!0;let O=n[v.id];O===void 0&&(O={},n[v.id]=O);let q=O[w.id];q===void 0&&(q={},O[w.id]=q);let H=q[U];return H===void 0&&(H=g(f()),q[U]=H),H}function g(v){const w=[],V=[],U=[];for(let O=0;O<t;O++)w[O]=0,V[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:U,object:v,attributes:{},index:null}}function h(v,w,V,U){const O=s.attributes,q=w.attributes;let H=0;const B=V.getAttributes();for(const N in B)if(B[N].location>=0){const te=O[N];let ne=q[N];if(ne===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function x(v,w,V,U){const O={},q=w.attributes;let H=0;const B=V.getAttributes();for(const N in B)if(B[N].location>=0){let te=q[N];te===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),O[N]=ne,H++}s.attributes=O,s.attributesNum=H,s.index=U}function E(){const v=s.newAttributes;for(let w=0,V=v.length;w<V;w++)v[w]=0}function p(v){u(v,0)}function u(v,w){const V=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;V[v]=1,U[v]===0&&(i.enableVertexAttribArray(v),U[v]=1),O[v]!==w&&(i.vertexAttribDivisor(v,w),O[v]=w)}function R(){const v=s.newAttributes,w=s.enabledAttributes;for(let V=0,U=w.length;V<U;V++)w[V]!==v[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function T(v,w,V,U,O,q,H){H===!0?i.vertexAttribIPointer(v,w,V,O,q):i.vertexAttribPointer(v,w,V,U,O,q)}function b(v,w,V,U){E();const O=U.attributes,q=V.getAttributes(),H=w.defaultAttributeValues;for(const B in q){const N=q[B];if(N.location>=0){let j=O[B];if(j===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const te=j.normalized,ne=j.itemSize,ge=e.get(j);if(ge===void 0)continue;const Re=ge.buffer,W=ge.type,J=ge.bytesPerElement,ce=W===i.INT||W===i.UNSIGNED_INT||j.gpuType===ja;if(j.isInterleavedBufferAttribute){const ae=j.data,Ee=ae.stride,Ve=j.offset;if(ae.isInstancedInterleavedBuffer){for(let Ae=0;Ae<N.locationSize;Ae++)u(N.location+Ae,ae.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ae=0;Ae<N.locationSize;Ae++)p(N.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ae=0;Ae<N.locationSize;Ae++)T(N.location+Ae,ne/N.locationSize,W,te,Ee*J,(Ve+ne/N.locationSize*Ae)*J,ce)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,j.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<N.locationSize;ae++)p(N.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ae=0;ae<N.locationSize;ae++)T(N.location+ae,ne/N.locationSize,W,te,ne*J,ne/N.locationSize*ae*J,ce)}}else if(H!==void 0){const te=H[B];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(N.location,te);break;case 3:i.vertexAttrib3fv(N.location,te);break;case 4:i.vertexAttrib4fv(N.location,te);break;default:i.vertexAttrib1fv(N.location,te)}}}}R()}function A(){z();for(const v in n){const w=n[v];for(const V in w){const U=w[V];for(const O in U)l(U[O].object),delete U[O];delete w[V]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const V in w){const U=w[V];for(const O in U)l(U[O].object),delete U[O];delete w[V]}delete n[v.id]}function L(v){for(const w in n){const V=n[w];if(V[v.id]===void 0)continue;const U=V[v.id];for(const O in U)l(U[O].object),delete U[O];delete V[v.id]}}function z(){M(),o=!0,s!==a&&(s=a,d(s.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:z,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:p,disableUnusedAttributes:R}}function af(i,e,t){let n;function a(d){n=d}function s(d,l){i.drawArrays(n,d,l),t.update(l,n,1)}function o(d,l,c){c!==0&&(i.drawArraysInstanced(n,d,l,c),t.update(l,n,c))}function r(d,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,l,0,c);let h=0;for(let x=0;x<c;x++)h+=l[x];t.update(h,n,1)}function f(d,l,c,g){if(c===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let x=0;x<d.length;x++)o(d[x],l[x],g[x]);else{h.multiDrawArraysInstancedWEBGL(n,d,0,l,0,g,0,c);let x=0;for(let E=0;E<c;E++)x+=l[E]*g[E];t.update(x,n,1)}}this.setMode=a,this.render=s,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=f}function sf(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function o(L){return!(L!==Ut&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(L){const z=L===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==jt&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qt&&!z)}function f(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const l=f(d);l!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",l,"instead."),d=l);const c=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:o,textureTypeReadable:r,precision:d,logarithmicDepthBuffer:c,reverseDepthBuffer:g,maxTextures:h,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:A,maxSamples:C}}function of(i){const e=this;let t=null,n=0,a=!1,s=!1;const o=new ro,r=new ze,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(c,g){const h=c.length!==0||g||n!==0||a;return a=g,n=c.length,h},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,g){t=l(c,g,0)},this.setState=function(c,g,h){const x=c.clippingPlanes,E=c.clipIntersection,p=c.clipShadows,u=i.get(c);if(!a||x===null||x.length===0||s&&!p)s?l(null):d();else{const R=s?0:n,T=R*4;let b=u.clippingState||null;f.value=b,b=l(x,g,T,h);for(let A=0;A!==T;++A)b[A]=t[A];u.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(c,g,h,x){const E=c!==null?c.length:0;let p=null;if(E!==0){if(p=f.value,x!==!0||p===null){const u=h+E*4,R=g.matrixWorldInverse;r.getNormalMatrix(R),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,b=h;T!==E;++T,b+=4)o.copy(c[T]).applyMatrix4(R,r),o.normal.toArray(p,b),p[b+3]=o.constant}f.value=p,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function rf(i){let e=new WeakMap;function t(o,r){return r===ui?o.mapping=Sn:r===hi&&(o.mapping=rn),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===ui||r===hi)if(e.has(o)){const f=e.get(o).texture;return t(f,o.mapping)}else{const f=o.image;if(f&&f.height>0){const d=new Ao(f.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",a),t(d.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const f=e.get(r);f!==void 0&&(e.delete(r),f.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const an=4,va=[.125,.215,.35,.446,.526,.582],Xt=20,Jn=new Co,xa=new Pe;let ei=null,ti=0,ni=0,ii=!1;const Wt=(1+Math.sqrt(5))/2,Jt=1/Wt,Ma=[new be(-Wt,Jt,0),new be(Wt,Jt,0),new be(-Jt,0,Wt),new be(Jt,0,Wt),new be(0,Wt,-Jt),new be(0,Wt,Jt),new be(-1,1,-1),new be(1,1,-1),new be(-1,1,1),new be(1,1,1)],cf=new be;class Sa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,s={}){const{size:o=256,position:r=cf}=s;ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,a,f,r),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ei,ti,ni),this._renderer.xr.enabled=ii,e.scissorTest=!1,Cn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sn||e.mapping===rn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ei=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),ni=this._renderer.getActiveMipmapLevel(),ii=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Bn,format:Ut,colorSpace:Gn,depthBuffer:!1},a=Ea(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(s)),this._blurMaterial=ff(s,e,t)}return a}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Jn)}_sceneToCubeUV(e,t,n,a,s){const f=new mn(90,1,t,n),d=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,g=c.autoClear,h=c.toneMapping;c.getClearColor(xa),c.toneMapping=Nt,c.autoClear=!1;const x=new It({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),E=new Je(new _i,x);let p=!1;const u=e.background;u?u.isColor&&(x.color.copy(u),e.background=null,p=!0):(x.color.copy(xa),p=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(f.up.set(0,d[R],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+l[R],s.y,s.z)):T===1?(f.up.set(0,0,d[R]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+l[R],s.z)):(f.up.set(0,d[R],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+l[R]));const b=this._cubeSize;Cn(a,T*b,R>2?b:0,b,b),c.setRenderTarget(a),p&&c.render(E,f),c.render(e,f)}E.geometry.dispose(),E.material.dispose(),c.toneMapping=h,c.autoClear=g,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Sn||e.mapping===rn;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ba());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const f=this._cubeSize;Cn(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,Jn)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Ma[(a-s-1)%Ma.length];this._blur(e,s-1,s,o,r)}t.autoClear=n}_blur(e,t,n,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,a,"latitudinal",s),this._halfBlur(o,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,o,r){const f=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,c=new Je(this._lodPlanes[a],d),g=d.uniforms,h=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Xt-1),E=s/x,p=isFinite(s)?1+Math.floor(l*E):Xt;p>Xt&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xt}`);const u=[];let R=0;for(let L=0;L<Xt;++L){const z=L/E,M=Math.exp(-z*z/2);u.push(M),L===0?R+=M:L<p&&(R+=2*M)}for(let L=0;L<u.length;L++)u[L]=u[L]/R;g.envMap.value=e.texture,g.samples.value=p,g.weights.value=u,g.latitudinal.value=o==="latitudinal",r&&(g.poleAxis.value=r);const{_lodMax:T}=this;g.dTheta.value=x,g.mipInt.value=T-n;const b=this._sizeLods[a],A=3*b*(a>T-an?a-T+an:0),C=4*(this._cubeSize-b);Cn(t,A,C,3*b,2*b),f.setRenderTarget(t),f.render(c,Jn)}}function lf(i){const e=[],t=[],n=[];let a=i;const s=i-an+1+va.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let f=1/r;o>i-an?f=va[o-i+an-1]:o===0&&(f=0),n.push(f);const d=1/(r-2),l=-d,c=1+d,g=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,x=6,E=3,p=2,u=1,R=new Float32Array(E*x*h),T=new Float32Array(p*x*h),b=new Float32Array(u*x*h);for(let C=0;C<h;C++){const L=C%3*2/3-1,z=C>2?0:-1,M=[L,z,0,L+2/3,z,0,L+2/3,z+1,0,L,z,0,L+2/3,z+1,0,L,z+1,0];R.set(M,E*x*C),T.set(g,p*x*C);const v=[C,C,C,C,C,C];b.set(v,u*x*C)}const A=new yt;A.setAttribute("position",new Yt(R,E)),A.setAttribute("uv",new Yt(T,p)),A.setAttribute("faceIndex",new Yt(b,u)),e.push(A),a>an&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ea(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=Hn,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cn(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function ff(i,e,t){const n=new Float32Array(Xt),a=new be(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Xt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ei(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function ba(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ei(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Ta(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ei(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Ei(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function df(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const f=r.mapping,d=f===ui||f===hi,l=f===Sn||f===rn;if(d||l){let c=e.get(r);const g=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==g)return t===null&&(t=new Sa(i)),c=d?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{const h=r.image;return d&&h&&h.height>0||l&&h&&a(h)?(t===null&&(t=new Sa(i)),c=d?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",s),c.texture):null}}}return r}function a(r){let f=0;const d=6;for(let l=0;l<d;l++)r[l]!==void 0&&f++;return f===d}function s(r){const f=r.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function uf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Vt("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function hf(i,e,t,n){const a={},s=new WeakMap;function o(c){const g=c.target;g.index!==null&&e.remove(g.index);for(const x in g.attributes)e.remove(g.attributes[x]);g.removeEventListener("dispose",o),delete a[g.id];const h=s.get(g);h&&(e.remove(h),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function r(c,g){return a[g.id]===!0||(g.addEventListener("dispose",o),a[g.id]=!0,t.memory.geometries++),g}function f(c){const g=c.attributes;for(const h in g)e.update(g[h],i.ARRAY_BUFFER)}function d(c){const g=[],h=c.index,x=c.attributes.position;let E=0;if(h!==null){const R=h.array;E=h.version;for(let T=0,b=R.length;T<b;T+=3){const A=R[T+0],C=R[T+1],L=R[T+2];g.push(A,C,C,L,L,A)}}else if(x!==void 0){const R=x.array;E=x.version;for(let T=0,b=R.length/3-1;T<b;T+=3){const A=T+0,C=T+1,L=T+2;g.push(A,C,C,L,L,A)}}else return;const p=new(Lo(g)?Po:Do)(g,1);p.version=E;const u=s.get(c);u&&e.remove(u),s.set(c,p)}function l(c){const g=s.get(c);if(g){const h=c.index;h!==null&&g.version<h.version&&d(c)}else d(c);return s.get(c)}return{get:r,update:f,getWireframeAttribute:l}}function pf(i,e,t){let n;function a(g){n=g}let s,o;function r(g){s=g.type,o=g.bytesPerElement}function f(g,h){i.drawElements(n,h,s,g*o),t.update(h,n,1)}function d(g,h,x){x!==0&&(i.drawElementsInstanced(n,h,s,g*o,x),t.update(h,n,x))}function l(g,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,g,0,x);let p=0;for(let u=0;u<x;u++)p+=h[u];t.update(p,n,1)}function c(g,h,x,E){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g.length;u++)d(g[u]/o,h[u],E[u]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,g,0,E,0,x);let u=0;for(let R=0;R<x;R++)u+=h[R]*E[R];t.update(u,n,1)}}this.setMode=a,this.setIndex=r,this.render=f,this.renderInstances=d,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function mf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(s/3);break;case i.LINES:t.lines+=r*(s/2);break;case i.LINE_STRIP:t.lines+=r*(s-1);break;case i.LINE_LOOP:t.lines+=r*s;break;case i.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function gf(i,e,t){const n=new WeakMap,a=new _t;function s(o,r,f){const d=o.morphTargetInfluences,l=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,c=l!==void 0?l.length:0;let g=n.get(r);if(g===void 0||g.count!==c){let M=function(){L.dispose(),n.delete(r),r.removeEventListener("dispose",M)};g!==void 0&&g.texture.dispose();const h=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,E=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],u=r.morphAttributes.normal||[],R=r.morphAttributes.color||[];let T=0;h===!0&&(T=1),x===!0&&(T=2),E===!0&&(T=3);let b=r.attributes.position.count*T,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*c),L=new ts(C,b,A,c);L.type=qt,L.needsUpdate=!0;const z=T*4;for(let v=0;v<c;v++){const w=p[v],V=u[v],U=R[v],O=b*A*4*v;for(let q=0;q<w.count;q++){const H=q*z;h===!0&&(a.fromBufferAttribute(w,q),C[O+H+0]=a.x,C[O+H+1]=a.y,C[O+H+2]=a.z,C[O+H+3]=0),x===!0&&(a.fromBufferAttribute(V,q),C[O+H+4]=a.x,C[O+H+5]=a.y,C[O+H+6]=a.z,C[O+H+7]=0),E===!0&&(a.fromBufferAttribute(U,q),C[O+H+8]=a.x,C[O+H+9]=a.y,C[O+H+10]=a.z,C[O+H+11]=U.itemSize===4?a.w:1)}}g={count:c,texture:L,size:new ut(b,A)},n.set(r,g),r.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let E=0;E<d.length;E++)h+=d[E];const x=r.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function _f(i,e,t,n){let a=new WeakMap;function s(f){const d=n.render.frame,l=f.geometry,c=e.get(f,l);if(a.get(c)!==d&&(e.update(c),a.set(c,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",r)===!1&&f.addEventListener("dispose",r),a.get(f)!==d&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;a.get(g)!==d&&(g.update(),a.set(g,d))}return c}function o(){a=new WeakMap}function r(f){const d=f.target;d.removeEventListener("dispose",r),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const us=new Za,Aa=new Xa(1,1),hs=new ts,ps=new Ho,ms=new Go,Ra=[],ya=[],wa=new Float32Array(16),Ca=new Float32Array(9),Pa=new Float32Array(4);function ln(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=Ra[a];if(s===void 0&&(s=new Float32Array(a),Ra[a]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(s,r)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zn(i,e){let t=ya[e];t===void 0&&(t=new Int32Array(e),ya[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function Ef(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,n))return;Pa.set(n),i.uniformMatrix2fv(this.addr,!1,Pa),rt(t,n)}}function bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,n))return;Ca.set(n),i.uniformMatrix3fv(this.addr,!1,Ca),rt(t,n)}}function Tf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(ot(t,n))return;wa.set(n),i.uniformMatrix4fv(this.addr,!1,wa),rt(t,n)}}function Af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Uf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(Aa.compareFunction=qa,s=Aa):s=us,t.setTexture2D(e||s,a)}function If(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||ps,a)}function Nf(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||ms,a)}function Of(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||hs,a)}function Ff(i){switch(i){case 5126:return vf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return yf;case 35669:case 35673:return wf;case 5125:return Cf;case 36294:return Pf;case 36295:return Df;case 36296:return Lf;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Of}}function kf(i,e){i.uniform1fv(this.addr,e)}function Bf(i,e){const t=ln(e,this.size,2);i.uniform2fv(this.addr,t)}function Gf(i,e){const t=ln(e,this.size,3);i.uniform3fv(this.addr,t)}function Hf(i,e){const t=ln(e,this.size,4);i.uniform4fv(this.addr,t)}function zf(i,e){const t=ln(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vf(i,e){const t=ln(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wf(i,e){const t=ln(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xf(i,e){i.uniform1iv(this.addr,e)}function qf(i,e){i.uniform2iv(this.addr,e)}function Kf(i,e){i.uniform3iv(this.addr,e)}function Yf(i,e){i.uniform4iv(this.addr,e)}function $f(i,e){i.uniform1uiv(this.addr,e)}function Zf(i,e){i.uniform2uiv(this.addr,e)}function jf(i,e){i.uniform3uiv(this.addr,e)}function Qf(i,e){i.uniform4uiv(this.addr,e)}function Jf(i,e,t){const n=this.cache,a=e.length,s=zn(t,a);ot(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||us,s[o])}function ed(i,e,t){const n=this.cache,a=e.length,s=zn(t,a);ot(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||ps,s[o])}function td(i,e,t){const n=this.cache,a=e.length,s=zn(t,a);ot(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||ms,s[o])}function nd(i,e,t){const n=this.cache,a=e.length,s=zn(t,a);ot(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||hs,s[o])}function id(i){switch(i){case 5126:return kf;case 35664:return Bf;case 35665:return Gf;case 35666:return Hf;case 35674:return zf;case 35675:return Vf;case 35676:return Wf;case 5124:case 35670:return Xf;case 35667:case 35671:return qf;case 35668:case 35672:return Kf;case 35669:case 35673:return Yf;case 5125:return $f;case 36294:return Zf;case 36295:return jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return ed;case 35680:case 36300:case 36308:case 36293:return td;case 36289:case 36303:case 36311:case 36292:return nd}}class ad{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ff(t.type)}}class sd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=id(t.type)}}class od{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],n)}}}const ai=/(\w+)(\])?(\[|\.)?/g;function Da(i,e){i.seq.push(e),i.map[e.id]=e}function rd(i,e,t){const n=i.name,a=n.length;for(ai.lastIndex=0;;){const s=ai.exec(n),o=ai.lastIndex;let r=s[1];const f=s[2]==="]",d=s[3];if(f&&(r=r|0),d===void 0||d==="["&&o+2===a){Da(t,d===void 0?new ad(r,i,e):new sd(r,i,e));break}else{let c=t.map[r];c===void 0&&(c=new od(r),Da(t,c)),t=c}}}class Ln{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);rd(s,o,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],f=n[r.id];f.needsUpdate!==!1&&r.setValue(e,f.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&n.push(o)}return n}}function La(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cd=37297;let ld=0;function fd(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}const Ua=new ze;function dd(i){st._getMatrix(Ua,st.workingColorSpace,i);const e=`mat3( ${Ua.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case as:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ia(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+fd(i.getShaderSource(e),o)}else return a}function ud(i,e){const t=dd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hd(i,e){let t;switch(e){case Bo:t="Linear";break;case ko:t="Reinhard";break;case Fo:t="Cineon";break;case os:t="ACESFilmic";break;case Oo:t="AgX";break;case No:t="Neutral";break;case Io:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pn=new be;function pd(){st.getLuminanceCoefficients(Pn);const i=Pn.x.toFixed(4),e=Pn.y.toFixed(4),t=Pn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function md(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pn).join(`
`)}function gd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _d(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),o=s.name;let r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function pn(i){return i!==""}function Na(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vd=/^[ \t]*#include +<([\w\d./]+)>/gm;function mi(i){return i.replace(vd,Md)}const xd=new Map;function Md(i,e){let t=Ue[e];if(t===void 0){const n=xd.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mi(t)}const Sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fa(i){return i.replace(Sd,Ed)}function Ed(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function ka(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ss?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dt&&(e="SHADOWMAP_TYPE_VSM"),e}function Td(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sn:case rn:e="ENVMAP_TYPE_CUBE";break;case Hn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ad(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rn:e="ENVMAP_MODE_REFRACTION";break}return e}function Rd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case Wo:e="ENVMAP_BLENDING_MIX";break;case Vo:e="ENVMAP_BLENDING_ADD";break}return e}function yd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wd(i,e,t,n){const a=i.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const f=bd(t),d=Td(t),l=Ad(t),c=Rd(t),g=yd(t),h=md(t),x=gd(s),E=a.createProgram();let p,u,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pn).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(pn).join(`
`),u.length>0&&(u+=`
`)):(p=[ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pn).join(`
`),u=[ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nt?"#define TONE_MAPPING":"",t.toneMapping!==Nt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Nt?hd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ud("linearToOutputTexel",t.outputColorSpace),pd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pn).join(`
`)),o=mi(o),o=Na(o,t),o=Oa(o,t),r=mi(r),r=Na(r,t),r=Oa(r,t),o=Fa(o),r=Fa(r),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=R+p+o,b=R+u+r,A=La(a,a.VERTEX_SHADER,T),C=La(a,a.FRAGMENT_SHADER,b);a.attachShader(E,A),a.attachShader(E,C),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function L(w){if(i.debug.checkShaderErrors){const V=a.getProgramInfoLog(E).trim(),U=a.getShaderInfoLog(A).trim(),O=a.getShaderInfoLog(C).trim();let q=!0,H=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,E,A,C);else{const B=Ia(a,A,"vertex"),N=Ia(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+B+`
`+N)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||O==="")&&(H=!1);H&&(w.diagnostics={runnable:q,programLog:V,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:u}})}a.deleteShader(A),a.deleteShader(C),z=new Ln(a,E),M=_d(a,E)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=a.getProgramParameter(E,cd)),v},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ld++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=C,this}let Cd=0;class Pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dd(e),t.set(e,n)),n}}class Dd{constructor(e){this.id=Cd++,this.code=e,this.usedTimes=0}}function Ld(i,e,t,n,a,s,o){const r=new Uo,f=new Pd,d=new Set,l=[],c=a.logarithmicDepthBuffer,g=a.vertexTextures;let h=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return d.add(M),M===0?"uv":`uv${M}`}function p(M,v,w,V,U){const O=V.fog,q=U.geometry,H=M.isMeshStandardMaterial?V.environment:null,B=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),N=B&&B.mapping===Hn?B.image.height:null,j=x[M.type];M.precision!==null&&(h=a.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ne=te!==void 0?te.length:0;let ge=0;q.morphAttributes.position!==void 0&&(ge=1),q.morphAttributes.normal!==void 0&&(ge=2),q.morphAttributes.color!==void 0&&(ge=3);let Re,W,J,ce;if(j){const Ke=Rt[j];Re=Ke.vertexShader,W=Ke.fragmentShader}else Re=M.vertexShader,W=M.fragmentShader,f.update(M),J=f.getVertexShaderID(M),ce=f.getFragmentShaderID(M);const ae=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ve=U.isInstancedMesh===!0,Ae=U.isBatchedMesh===!0,it=!!M.map,et=!!M.matcap,Ne=!!B,y=!!M.aoMap,Mt=!!M.lightMap,Oe=!!M.bumpMap,Fe=!!M.normalMap,xe=!!M.displacementMap,Ze=!!M.emissiveMap,ve=!!M.metalnessMap,S=!!M.roughnessMap,m=M.anisotropy>0,F=M.clearcoat>0,Y=M.dispersion>0,Z=M.iridescence>0,K=M.sheen>0,_e=M.transmission>0,re=m&&!!M.anisotropyMap,ue=F&&!!M.clearcoatMap,Be=F&&!!M.clearcoatNormalMap,ee=F&&!!M.clearcoatRoughnessMap,he=Z&&!!M.iridescenceMap,Te=Z&&!!M.iridescenceThicknessMap,ye=K&&!!M.sheenColorMap,pe=K&&!!M.sheenRoughnessMap,ke=!!M.specularMap,Le=!!M.specularColorMap,$e=!!M.specularIntensityMap,P=_e&&!!M.transmissionMap,se=_e&&!!M.thicknessMap,X=!!M.gradientMap,$=!!M.alphaMap,fe=M.alphaTest>0,le=!!M.alphaHash,De=!!M.extensions;let tt=Nt;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(tt=i.toneMapping);const dt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:W,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&U._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&U.instanceColor!==null,instancingMorph:Ve&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Gn,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:et,envMap:Ne,envMapMode:Ne&&B.mapping,envMapCubeUVHeight:N,aoMap:y,lightMap:Mt,bumpMap:Oe,normalMap:Fe,displacementMap:g&&xe,emissiveMap:Ze,normalMapObjectSpace:Fe&&M.normalMapType===wo,normalMapTangentSpace:Fe&&M.normalMapType===yo,metalnessMap:ve,roughnessMap:S,anisotropy:m,anisotropyMap:re,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:Be,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Te,sheen:K,sheenColorMap:ye,sheenRoughnessMap:pe,specularMap:ke,specularColorMap:Le,specularIntensityMap:$e,transmission:_e,transmissionMap:P,thicknessMap:se,gradientMap:X,opaque:M.transparent===!1&&M.blending===Dn&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:fe,alphaHash:le,combine:M.combine,mapUv:it&&E(M.map.channel),aoMapUv:y&&E(M.aoMap.channel),lightMapUv:Mt&&E(M.lightMap.channel),bumpMapUv:Oe&&E(M.bumpMap.channel),normalMapUv:Fe&&E(M.normalMap.channel),displacementMapUv:xe&&E(M.displacementMap.channel),emissiveMapUv:Ze&&E(M.emissiveMap.channel),metalnessMapUv:ve&&E(M.metalnessMap.channel),roughnessMapUv:S&&E(M.roughnessMap.channel),anisotropyMapUv:re&&E(M.anisotropyMap.channel),clearcoatMapUv:ue&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:Be&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&E(M.sheenRoughnessMap.channel),specularMapUv:ke&&E(M.specularMap.channel),specularColorMapUv:Le&&E(M.specularColorMap.channel),specularIntensityMapUv:$e&&E(M.specularIntensityMap.channel),transmissionMapUv:P&&E(M.transmissionMap.channel),thicknessMapUv:se&&E(M.thicknessMap.channel),alphaMapUv:$&&E(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Fe||m),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(it||$),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Ee,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===je,decodeVideoTextureEmissive:Ze&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pt,flipSided:M.side===xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=d.has(1),dt.vertexUv2s=d.has(2),dt.vertexUv3s=d.has(3),d.clear(),dt}function u(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)v.push(w),v.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(R(v,M),T(v,M),v.push(i.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function R(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function T(M,v){r.disableAll(),v.supportsVertexTextures&&r.enable(0),v.instancing&&r.enable(1),v.instancingColor&&r.enable(2),v.instancingMorph&&r.enable(3),v.matcap&&r.enable(4),v.envMap&&r.enable(5),v.normalMapObjectSpace&&r.enable(6),v.normalMapTangentSpace&&r.enable(7),v.clearcoat&&r.enable(8),v.iridescence&&r.enable(9),v.alphaTest&&r.enable(10),v.vertexColors&&r.enable(11),v.vertexAlphas&&r.enable(12),v.vertexUv1s&&r.enable(13),v.vertexUv2s&&r.enable(14),v.vertexUv3s&&r.enable(15),v.vertexTangents&&r.enable(16),v.anisotropy&&r.enable(17),v.alphaHash&&r.enable(18),v.batching&&r.enable(19),v.dispersion&&r.enable(20),v.batchingColor&&r.enable(21),M.push(r.mask),r.disableAll(),v.fog&&r.enable(0),v.useFog&&r.enable(1),v.flatShading&&r.enable(2),v.logarithmicDepthBuffer&&r.enable(3),v.reverseDepthBuffer&&r.enable(4),v.skinning&&r.enable(5),v.morphTargets&&r.enable(6),v.morphNormals&&r.enable(7),v.morphColors&&r.enable(8),v.premultipliedAlpha&&r.enable(9),v.shadowMapEnabled&&r.enable(10),v.doubleSided&&r.enable(11),v.flipSided&&r.enable(12),v.useDepthPacking&&r.enable(13),v.dithering&&r.enable(14),v.transmission&&r.enable(15),v.sheen&&r.enable(16),v.opaque&&r.enable(17),v.pointsUvs&&r.enable(18),v.decodeVideoTexture&&r.enable(19),v.decodeVideoTextureEmissive&&r.enable(20),v.alphaToCoverage&&r.enable(21),M.push(r.mask)}function b(M){const v=x[M.type];let w;if(v){const V=Rt[v];w=Ro.clone(V.uniforms)}else w=M.uniforms;return w}function A(M,v){let w;for(let V=0,U=l.length;V<U;V++){const O=l[V];if(O.cacheKey===v){w=O,++w.usedTimes;break}}return w===void 0&&(w=new wd(i,v,M,s),l.push(w)),w}function C(M){if(--M.usedTimes===0){const v=l.indexOf(M);l[v]=l[l.length-1],l.pop(),M.destroy()}}function L(M){f.remove(M)}function z(){f.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:A,releaseProgram:C,releaseShaderCache:L,programs:l,dispose:z}}function Ud(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function n(o){i.delete(o)}function a(o,r,f){i.get(o)[r]=f}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ba(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ga(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function o(c,g,h,x,E,p){let u=i[e];return u===void 0?(u={id:c.id,object:c,geometry:g,material:h,groupOrder:x,renderOrder:c.renderOrder,z:E,group:p},i[e]=u):(u.id=c.id,u.object=c,u.geometry=g,u.material=h,u.groupOrder=x,u.renderOrder=c.renderOrder,u.z=E,u.group=p),e++,u}function r(c,g,h,x,E,p){const u=o(c,g,h,x,E,p);h.transmission>0?n.push(u):h.transparent===!0?a.push(u):t.push(u)}function f(c,g,h,x,E,p){const u=o(c,g,h,x,E,p);h.transmission>0?n.unshift(u):h.transparent===!0?a.unshift(u):t.unshift(u)}function d(c,g){t.length>1&&t.sort(c||Id),n.length>1&&n.sort(g||Ba),a.length>1&&a.sort(g||Ba)}function l(){for(let c=e,g=i.length;c<g;c++){const h=i[c];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:r,unshift:f,finish:l,sort:d}}function Nd(){let i=new WeakMap;function e(n,a){const s=i.get(n);let o;return s===void 0?(o=new Ga,i.set(n,[o])):a>=s.length?(o=new Ga,s.push(o)):o=s[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Od(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new be,color:new Pe};break;case"SpotLight":t={position:new be,direction:new be,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new be,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new be,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new be,halfWidth:new be,halfHeight:new be};break}return i[e.id]=t,t}}}function Fd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kd=0;function Bd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gd(i){const e=new Od,t=Fd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new be);const a=new be,s=new Ft,o=new Ft;function r(d){let l=0,c=0,g=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,x=0,E=0,p=0,u=0,R=0,T=0,b=0,A=0,C=0,L=0;d.sort(Bd);for(let M=0,v=d.length;M<v;M++){const w=d[M],V=w.color,U=w.intensity,O=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=V.r*U,c+=V.g*U,g+=V.b*U;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],U);L++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const B=w.shadow,N=t.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.directionalShadow[h]=N,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=w.shadow.matrix,R++}n.directional[h]=H,h++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(V).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[E]=H;const B=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,B.updateMatrices(w),w.castShadow&&C++),n.spotLightMatrix[E]=B.matrix,w.castShadow){const N=t.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.spotShadow[E]=N,n.spotShadowMap[E]=q,b++}E++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(V).multiplyScalar(U),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=H,p++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const B=w.shadow,N=t.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,n.pointShadow[x]=N,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=w.shadow.matrix,T++}n.point[x]=H,x++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(U),H.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[u]=H,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==h||z.pointLength!==x||z.spotLength!==E||z.rectAreaLength!==p||z.hemiLength!==u||z.numDirectionalShadows!==R||z.numPointShadows!==T||z.numSpotShadows!==b||z.numSpotMaps!==A||z.numLightProbes!==L)&&(n.directional.length=h,n.spot.length=E,n.rectArea.length=p,n.point.length=x,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,z.directionalLength=h,z.pointLength=x,z.spotLength=E,z.rectAreaLength=p,z.hemiLength=u,z.numDirectionalShadows=R,z.numPointShadows=T,z.numSpotShadows=b,z.numSpotMaps=A,z.numLightProbes=L,n.version=kd++)}function f(d,l){let c=0,g=0,h=0,x=0,E=0;const p=l.matrixWorldInverse;for(let u=0,R=d.length;u<R;u++){const T=d[u];if(T.isDirectionalLight){const b=n.directional[c];b.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),c++}else if(T.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(p),h++}else if(T.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),o.identity(),s.copy(T.matrixWorld),s.premultiply(p),o.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){const b=n.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),g++}else if(T.isHemisphereLight){const b=n.hemi[E];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),E++}}}return{setup:r,setupView:f,state:n}}function Ha(i){const e=new Gd(i),t=[],n=[];function a(l){d.camera=l,t.length=0,n.length=0}function s(l){t.push(l)}function o(l){n.push(l)}function r(){e.setup(t)}function f(l){e.setupView(t,l)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:r,setupLightsView:f,pushLight:s,pushShadow:o}}function Hd(i){let e=new WeakMap;function t(a,s=0){const o=e.get(a);let r;return o===void 0?(r=new Ha(i),e.set(a,[r])):s>=o.length?(r=new Ha(i),o.push(r)):r=o[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const zd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wd(i,e,t){let n=new Wa;const a=new ut,s=new ut,o=new _t,r=new co({depthPacking:lo}),f=new fo,d={},l=t.maxTextureSize,c={[on]:xt,[xt]:on,[pt]:pt},g=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:zd,fragmentShader:Vd}),h=g.clone();h.defines.HORIZONTAL_PASS=1;const x=new yt;x.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Je(x,g),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let u=this.type;this.render=function(C,L,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending($t),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=u!==Dt&&this.type===Dt,O=u===Dt&&this.type!==Dt;for(let q=0,H=C.length;q<H;q++){const B=C[q],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const j=N.getFrameExtents();if(a.multiply(j),s.copy(N.mapSize),(a.x>l||a.y>l)&&(a.x>l&&(s.x=Math.floor(l/j.x),a.x=s.x*j.x,N.mapSize.x=s.x),a.y>l&&(s.y=Math.floor(l/j.y),a.y=s.y*j.y,N.mapSize.y=s.y)),N.map===null||U===!0||O===!0){const ne=this.type!==Dt?{minFilter:gn,magFilter:gn}:{};N.map!==null&&N.map.dispose(),N.map=new sn(a.x,a.y,ne),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const te=N.getViewportCount();for(let ne=0;ne<te;ne++){const ge=N.getViewport(ne);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),V.viewport(o),N.updateMatrices(B,ne),n=N.getFrustum(),b(L,z,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===Dt&&R(N,z),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,v,w)};function R(C,L){const z=e.update(E);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(a.x,a.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(L,null,z,g,E,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(L,null,z,h,E,null)}function T(C,L,z,M){let v=null;const w=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)v=w;else if(v=z.isPointLight===!0?f:r,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const V=v.uuid,U=L.uuid;let O=d[V];O===void 0&&(O={},d[V]=O);let q=O[U];q===void 0&&(q=v.clone(),O[U]=q,L.addEventListener("dispose",A)),v=q}if(v.visible=L.visible,v.wireframe=L.wireframe,M===Dt?v.side=L.shadowSide!==null?L.shadowSide:L.side:v.side=L.shadowSide!==null?L.shadowSide:c[L.side],v.alphaMap=L.alphaMap,v.alphaTest=L.alphaTest,v.map=L.map,v.clipShadows=L.clipShadows,v.clippingPlanes=L.clippingPlanes,v.clipIntersection=L.clipIntersection,v.displacementMap=L.displacementMap,v.displacementScale=L.displacementScale,v.displacementBias=L.displacementBias,v.wireframeLinewidth=L.wireframeLinewidth,v.linewidth=L.linewidth,z.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=i.properties.get(v);V.light=z}return v}function b(C,L,z,M,v){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===Dt)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const U=e.update(C),O=C.material;if(Array.isArray(O)){const q=U.groups;for(let H=0,B=q.length;H<B;H++){const N=q[H],j=O[N.materialIndex];if(j&&j.visible){const te=T(C,j,M,v);C.onBeforeShadow(i,C,L,z,U,te,N),i.renderBufferDirect(z,null,U,te,C,N),C.onAfterShadow(i,C,L,z,U,te,N)}}}else if(O.visible){const q=T(C,O,M,v);C.onBeforeShadow(i,C,L,z,U,q,null),i.renderBufferDirect(z,null,U,q,C,null),C.onAfterShadow(i,C,L,z,U,q,null)}}const V=C.children;for(let U=0,O=V.length;U<O;U++)b(V[U],L,z,M,v)}function A(C){C.target.removeEventListener("dispose",A);for(const z in d){const M=d[z],v=C.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const Xd={[di]:fi,[li]:oi,[ci]:si,[In]:ri,[fi]:di,[oi]:li,[si]:ci,[ri]:In};function qd(i,e){function t(){let P=!1;const se=new _t;let X=null;const $=new _t(0,0,0,0);return{setMask:function(fe){X!==fe&&!P&&(i.colorMask(fe,fe,fe,fe),X=fe)},setLocked:function(fe){P=fe},setClear:function(fe,le,De,tt,dt){dt===!0&&(fe*=tt,le*=tt,De*=tt),se.set(fe,le,De,tt),$.equals(se)===!1&&(i.clearColor(fe,le,De,tt),$.copy(se))},reset:function(){P=!1,X=null,$.set(-1,0,0,0)}}}function n(){let P=!1,se=!1,X=null,$=null,fe=null;return{setReversed:function(le){if(se!==le){const De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const tt=fe;fe=null,this.setClear(tt)}se=le},getReversed:function(){return se},setTest:function(le){le?ae(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(le){X!==le&&!P&&(i.depthMask(le),X=le)},setFunc:function(le){if(se&&(le=Xd[le]),$!==le){switch(le){case di:i.depthFunc(i.NEVER);break;case fi:i.depthFunc(i.ALWAYS);break;case li:i.depthFunc(i.LESS);break;case In:i.depthFunc(i.LEQUAL);break;case ci:i.depthFunc(i.EQUAL);break;case ri:i.depthFunc(i.GEQUAL);break;case oi:i.depthFunc(i.GREATER);break;case si:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=le}},setLocked:function(le){P=le},setClear:function(le){fe!==le&&(se&&(le=1-le),i.clearDepth(le),fe=le)},reset:function(){P=!1,X=null,$=null,fe=null,se=!1}}}function a(){let P=!1,se=null,X=null,$=null,fe=null,le=null,De=null,tt=null,dt=null;return{setTest:function(Ke){P||(Ke?ae(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!P&&(i.stencilMask(Ke),se=Ke)},setFunc:function(Ke,bt,wt){(X!==Ke||$!==bt||fe!==wt)&&(i.stencilFunc(Ke,bt,wt),X=Ke,$=bt,fe=wt)},setOp:function(Ke,bt,wt){(le!==Ke||De!==bt||tt!==wt)&&(i.stencilOp(Ke,bt,wt),le=Ke,De=bt,tt=wt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){dt!==Ke&&(i.clearStencil(Ke),dt=Ke)},reset:function(){P=!1,se=null,X=null,$=null,fe=null,le=null,De=null,tt=null,dt=null}}}const s=new t,o=new n,r=new a,f=new WeakMap,d=new WeakMap;let l={},c={},g=new WeakMap,h=[],x=null,E=!1,p=null,u=null,R=null,T=null,b=null,A=null,C=null,L=new Pe(0,0,0),z=0,M=!1,v=null,w=null,V=null,U=null,O=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=B>=2);let j=null,te={};const ne=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Re=new _t().fromArray(ne),W=new _t().fromArray(ge);function J(P,se,X,$){const fe=new Uint8Array(4),le=i.createTexture();i.bindTexture(P,le),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<X;De++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(se+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return le}const ce={};ce[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),ae(i.DEPTH_TEST),o.setFunc(In),Oe(!1),Fe(na),ae(i.CULL_FACE),y($t);function ae(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function Ee(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function Ve(P,se){return c[P]!==se?(i.bindFramebuffer(P,se),c[P]=se,P===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=se),P===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(P,se){let X=h,$=!1;if(P){X=g.get(se),X===void 0&&(X=[],g.set(se,X));const fe=P.textures;if(X.length!==fe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=fe.length;le<De;le++)X[le]=i.COLOR_ATTACHMENT0+le;X.length=fe.length,$=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,$=!0);$&&i.drawBuffers(X)}function it(P){return x!==P?(i.useProgram(P),x=P,!0):!1}const et={[dn]:i.FUNC_ADD,[Is]:i.FUNC_SUBTRACT,[Us]:i.FUNC_REVERSE_SUBTRACT};et[qo]=i.MIN,et[Ko]=i.MAX;const Ne={[$s]:i.ZERO,[Ys]:i.ONE,[Ks]:i.SRC_COLOR,[qs]:i.SRC_ALPHA,[Xs]:i.SRC_ALPHA_SATURATE,[Ws]:i.DST_COLOR,[Vs]:i.DST_ALPHA,[zs]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[Gs]:i.ONE_MINUS_DST_COLOR,[Bs]:i.ONE_MINUS_DST_ALPHA,[ks]:i.CONSTANT_COLOR,[Fs]:i.ONE_MINUS_CONSTANT_COLOR,[Os]:i.CONSTANT_ALPHA,[Ns]:i.ONE_MINUS_CONSTANT_ALPHA};function y(P,se,X,$,fe,le,De,tt,dt,Ke){if(P===$t){E===!0&&(Ee(i.BLEND),E=!1);return}if(E===!1&&(ae(i.BLEND),E=!0),P!==To){if(P!==p||Ke!==M){if((u!==dn||b!==dn)&&(i.blendEquation(i.FUNC_ADD),u=dn,b=dn),Ke)switch(P){case Dn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,T=null,A=null,C=null,L.set(0,0,0),z=0,p=P,M=Ke}return}fe=fe||se,le=le||X,De=De||$,(se!==u||fe!==b)&&(i.blendEquationSeparate(et[se],et[fe]),u=se,b=fe),(X!==R||$!==T||le!==A||De!==C)&&(i.blendFuncSeparate(Ne[X],Ne[$],Ne[le],Ne[De]),R=X,T=$,A=le,C=De),(tt.equals(L)===!1||dt!==z)&&(i.blendColor(tt.r,tt.g,tt.b,dt),L.copy(tt),z=dt),p=P,M=!1}function Mt(P,se){P.side===pt?Ee(i.CULL_FACE):ae(i.CULL_FACE);let X=P.side===xt;se&&(X=!X),Oe(X),P.blending===Dn&&P.transparent===!1?y($t):y(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);const $=P.stencilWrite;r.setTest($),$&&(r.setMask(P.stencilWriteMask),r.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),r.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ze(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){v!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),v=P)}function Fe(P){P!==Eo?(ae(i.CULL_FACE),P!==w&&(P===na?i.cullFace(i.BACK):P===bo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),w=P}function xe(P){P!==V&&(H&&i.lineWidth(P),V=P)}function Ze(P,se,X){P?(ae(i.POLYGON_OFFSET_FILL),(U!==se||O!==X)&&(i.polygonOffset(se,X),U=se,O=X)):Ee(i.POLYGON_OFFSET_FILL)}function ve(P){P?ae(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function S(P){P===void 0&&(P=i.TEXTURE0+q-1),j!==P&&(i.activeTexture(P),j=P)}function m(P,se,X){X===void 0&&(j===null?X=i.TEXTURE0+q-1:X=j);let $=te[X];$===void 0&&($={type:void 0,texture:void 0},te[X]=$),($.type!==P||$.texture!==se)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(P,se||ce[P]),$.type=P,$.texture=se)}function F(){const P=te[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){Re.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Re.copy(P))}function pe(P){W.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function ke(P,se){let X=d.get(se);X===void 0&&(X=new WeakMap,d.set(se,X));let $=X.get(P);$===void 0&&($=i.getUniformBlockIndex(se,P.name),X.set(P,$))}function Le(P,se){const $=d.get(se).get(P);f.get(se)!==$&&(i.uniformBlockBinding(se,$,P.__bindingPointIndex),f.set(se,$))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},j=null,te={},c={},g=new WeakMap,h=[],x=null,E=!1,p=null,u=null,R=null,T=null,b=null,A=null,C=null,L=new Pe(0,0,0),z=0,M=!1,v=null,w=null,V=null,U=null,O=null,Re.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:ae,disable:Ee,bindFramebuffer:Ve,drawBuffers:Ae,useProgram:it,setBlending:y,setMaterial:Mt,setFlipSided:Oe,setCullFace:Fe,setLineWidth:xe,setPolygonOffset:Ze,setScissorTest:ve,activeTexture:S,bindTexture:m,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:he,texImage3D:Te,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:Be,texStorage3D:ee,texSubImage2D:K,texSubImage3D:_e,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:ye,viewport:pe,reset:$e}}function Kd(i,e,t,n,a,s,o){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,l=new WeakMap;let c;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,m){return h?new OffscreenCanvas(S,m):zo("canvas")}function E(S,m,F){let Y=1;const Z=ve(S);if((Z.width>F||Z.height>F)&&(Y=F/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(Y*Z.width),_e=Math.floor(Y*Z.height);c===void 0&&(c=x(K,_e));const re=m?x(K,_e):c;return re.width=K,re.height=_e,re.getContext("2d").drawImage(S,0,0,K,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+_e+")."),re}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function p(S){return S.generateMipmaps}function u(S){i.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,m,F,Y,Z=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=m;if(m===i.RED&&(F===i.FLOAT&&(K=i.R32F),F===i.HALF_FLOAT&&(K=i.R16F),F===i.UNSIGNED_BYTE&&(K=i.R8)),m===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.R8UI),F===i.UNSIGNED_SHORT&&(K=i.R16UI),F===i.UNSIGNED_INT&&(K=i.R32UI),F===i.BYTE&&(K=i.R8I),F===i.SHORT&&(K=i.R16I),F===i.INT&&(K=i.R32I)),m===i.RG&&(F===i.FLOAT&&(K=i.RG32F),F===i.HALF_FLOAT&&(K=i.RG16F),F===i.UNSIGNED_BYTE&&(K=i.RG8)),m===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RG8UI),F===i.UNSIGNED_SHORT&&(K=i.RG16UI),F===i.UNSIGNED_INT&&(K=i.RG32UI),F===i.BYTE&&(K=i.RG8I),F===i.SHORT&&(K=i.RG16I),F===i.INT&&(K=i.RG32I)),m===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGB8UI),F===i.UNSIGNED_SHORT&&(K=i.RGB16UI),F===i.UNSIGNED_INT&&(K=i.RGB32UI),F===i.BYTE&&(K=i.RGB8I),F===i.SHORT&&(K=i.RGB16I),F===i.INT&&(K=i.RGB32I)),m===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),F===i.UNSIGNED_INT&&(K=i.RGBA32UI),F===i.BYTE&&(K=i.RGBA8I),F===i.SHORT&&(K=i.RGBA16I),F===i.INT&&(K=i.RGBA32I)),m===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),m===i.RGBA){const _e=Z?as:st.getTransfer(Y);F===i.FLOAT&&(K=i.RGBA32F),F===i.HALF_FLOAT&&(K=i.RGBA16F),F===i.UNSIGNED_BYTE&&(K=_e===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(S,m){let F;return S?m===null||m===Mn||m===xn?F=i.DEPTH24_STENCIL8:m===qt?F=i.DEPTH32F_STENCIL8:m===Nn&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Mn||m===xn?F=i.DEPTH_COMPONENT24:m===qt?F=i.DEPTH_COMPONENT32F:m===Nn&&(F=i.DEPTH_COMPONENT16),F}function A(S,m){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==gn&&S.minFilter!==nn?Math.log2(Math.max(m.width,m.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?m.mipmaps.length:1}function C(S){const m=S.target;m.removeEventListener("dispose",C),z(m),m.isVideoTexture&&l.delete(m)}function L(S){const m=S.target;m.removeEventListener("dispose",L),v(m)}function z(S){const m=n.get(S);if(m.__webglInit===void 0)return;const F=S.source,Y=g.get(F);if(Y){const Z=Y[m.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(S),Object.keys(Y).length===0&&g.delete(F)}n.remove(S)}function M(S){const m=n.get(S);i.deleteTexture(m.__webglTexture);const F=S.source,Y=g.get(F);delete Y[m.__cacheKey],o.memory.textures--}function v(S){const m=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(m.__webglFramebuffer[Y]))for(let Z=0;Z<m.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(m.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(m.__webglFramebuffer[Y]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[Y])}else{if(Array.isArray(m.__webglFramebuffer))for(let Y=0;Y<m.__webglFramebuffer.length;Y++)i.deleteFramebuffer(m.__webglFramebuffer[Y]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Y=0;Y<m.__webglColorRenderbuffer.length;Y++)m.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[Y]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const F=S.textures;for(let Y=0,Z=F.length;Y<Z;Y++){const K=n.get(F[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(S)}let w=0;function V(){w=0}function U(){const S=w;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),w+=1,S}function O(S){const m=[];return m.push(S.wrapS),m.push(S.wrapT),m.push(S.wrapR||0),m.push(S.magFilter),m.push(S.minFilter),m.push(S.anisotropy),m.push(S.internalFormat),m.push(S.format),m.push(S.type),m.push(S.generateMipmaps),m.push(S.premultiplyAlpha),m.push(S.flipY),m.push(S.unpackAlignment),m.push(S.colorSpace),m.join()}function q(S,m){const F=n.get(S);if(S.isVideoTexture&&xe(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,S,m);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+m)}function H(S,m){const F=n.get(S);if(S.version>0&&F.__version!==S.version){W(F,S,m);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+m)}function B(S,m){const F=n.get(S);if(S.version>0&&F.__version!==S.version){W(F,S,m);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+m)}function N(S,m){const F=n.get(S);if(S.version>0&&F.__version!==S.version){J(F,S,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+m)}const j={[Qs]:i.REPEAT,[js]:i.CLAMP_TO_EDGE,[Zs]:i.MIRRORED_REPEAT},te={[gn]:i.NEAREST,[Js]:i.NEAREST_MIPMAP_NEAREST,[Rn]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[qn]:i.LINEAR_MIPMAP_NEAREST,[hn]:i.LINEAR_MIPMAP_LINEAR},ne={[oo]:i.NEVER,[so]:i.ALWAYS,[ao]:i.LESS,[qa]:i.LEQUAL,[io]:i.EQUAL,[no]:i.GEQUAL,[to]:i.GREATER,[eo]:i.NOTEQUAL};function ge(S,m){if(m.type===qt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===nn||m.magFilter===qn||m.magFilter===Rn||m.magFilter===hn||m.minFilter===nn||m.minFilter===qn||m.minFilter===Rn||m.minFilter===hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,j[m.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,j[m.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,j[m.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,te[m.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,te[m.minFilter]),m.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,ne[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===gn||m.minFilter!==Rn&&m.minFilter!==hn||m.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,a.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Re(S,m){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,m.addEventListener("dispose",C));const Y=m.source;let Z=g.get(Y);Z===void 0&&(Z={},g.set(Y,Z));const K=O(m);if(K!==S.__cacheKey){Z[K]===void 0&&(Z[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[K].usedTimes++;const _e=Z[S.__cacheKey];_e!==void 0&&(Z[S.__cacheKey].usedTimes--,_e.usedTimes===0&&M(m)),S.__cacheKey=K,S.__webglTexture=Z[K].texture}return F}function W(S,m,F){let Y=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=Re(S,m),K=m.source;t.bindTexture(Y,S.__webglTexture,i.TEXTURE0+F);const _e=n.get(K);if(K.version!==_e.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const re=st.getPrimaries(st.workingColorSpace),ue=m.colorSpace===tn?null:st.getPrimaries(m.colorSpace),Be=m.colorSpace===tn||re===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ee=E(m.image,!1,a.maxTextureSize);ee=Ze(m,ee);const he=s.convert(m.format,m.colorSpace),Te=s.convert(m.type);let ye=T(m.internalFormat,he,Te,m.colorSpace,m.isVideoTexture);ge(Y,m);let pe;const ke=m.mipmaps,Le=m.isVideoTexture!==!0,$e=_e.__version===void 0||Z===!0,P=K.dataReady,se=A(m,ee);if(m.isDepthTexture)ye=b(m.format===Un,m.type),$e&&(Le?t.texStorage2D(i.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,he,Te,null));else if(m.isDataTexture)if(ke.length>0){Le&&$e&&t.texStorage2D(i.TEXTURE_2D,se,ye,ke[0].width,ke[0].height);for(let X=0,$=ke.length;X<$;X++)pe=ke[X],Le?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(i.TEXTURE_2D,X,ye,pe.width,pe.height,0,he,Te,pe.data);m.generateMipmaps=!1}else Le?($e&&t.texStorage2D(i.TEXTURE_2D,se,ye,ee.width,ee.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,he,Te,ee.data)):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,he,Te,ee.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Le&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,ke[0].width,ke[0].height,ee.depth);for(let X=0,$=ke.length;X<$;X++)if(pe=ke[X],m.format!==Ut)if(he!==null)if(Le){if(P)if(m.layerUpdates.size>0){const fe=ra(pe.width,pe.height,m.format,m.type);for(const le of m.layerUpdates){const De=pe.data.subarray(le*fe/pe.data.BYTES_PER_ELEMENT,(le+1)*fe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,le,pe.width,pe.height,1,he,De)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,ee.depth,he,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ye,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,ee.depth,he,Te,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ye,pe.width,pe.height,ee.depth,0,he,Te,pe.data)}else{Le&&$e&&t.texStorage2D(i.TEXTURE_2D,se,ye,ke[0].width,ke[0].height);for(let X=0,$=ke.length;X<$;X++)pe=ke[X],m.format!==Ut?he!==null?Le?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,pe.width,pe.height,he,Te,pe.data):t.texImage2D(i.TEXTURE_2D,X,ye,pe.width,pe.height,0,he,Te,pe.data)}else if(m.isDataArrayTexture)if(Le){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,ye,ee.width,ee.height,ee.depth),P)if(m.layerUpdates.size>0){const X=ra(ee.width,ee.height,m.format,m.type);for(const $ of m.layerUpdates){const fe=ee.data.subarray($*X/ee.data.BYTES_PER_ELEMENT,($+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,he,Te,fe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,he,Te,ee.data);else if(m.isData3DTexture)Le?($e&&t.texStorage3D(i.TEXTURE_3D,se,ye,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,he,Te,ee.data);else if(m.isFramebufferTexture){if($e)if(Le)t.texStorage2D(i.TEXTURE_2D,se,ye,ee.width,ee.height);else{let X=ee.width,$=ee.height;for(let fe=0;fe<se;fe++)t.texImage2D(i.TEXTURE_2D,fe,ye,X,$,0,he,Te,null),X>>=1,$>>=1}}else if(ke.length>0){if(Le&&$e){const X=ve(ke[0]);t.texStorage2D(i.TEXTURE_2D,se,ye,X.width,X.height)}for(let X=0,$=ke.length;X<$;X++)pe=ke[X],Le?P&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,he,Te,pe):t.texImage2D(i.TEXTURE_2D,X,ye,he,Te,pe);m.generateMipmaps=!1}else if(Le){if($e){const X=ve(ee);t.texStorage2D(i.TEXTURE_2D,se,ye,X.width,X.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,ye,he,Te,ee);p(m)&&u(Y),_e.__version=K.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function J(S,m,F){if(m.image.length!==6)return;const Y=Re(S,m),Z=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);const K=n.get(Z);if(Z.version!==K.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const _e=st.getPrimaries(st.workingColorSpace),re=m.colorSpace===tn?null:st.getPrimaries(m.colorSpace),ue=m.colorSpace===tn||_e===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Be=m.isCompressedTexture||m.image[0].isCompressedTexture,ee=m.image[0]&&m.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Be&&!ee?he[$]=E(m.image[$],!0,a.maxCubemapSize):he[$]=ee?m.image[$].image:m.image[$],he[$]=Ze(m,he[$]);const Te=he[0],ye=s.convert(m.format,m.colorSpace),pe=s.convert(m.type),ke=T(m.internalFormat,ye,pe,m.colorSpace),Le=m.isVideoTexture!==!0,$e=K.__version===void 0||Y===!0,P=Z.dataReady;let se=A(m,Te);ge(i.TEXTURE_CUBE_MAP,m);let X;if(Be){Le&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,ke,Te.width,Te.height);for(let $=0;$<6;$++){X=he[$].mipmaps;for(let fe=0;fe<X.length;fe++){const le=X[fe];m.format!==Ut?ye!==null?Le?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,le.width,le.height,ye,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,ke,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,0,0,le.width,le.height,ye,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe,ke,le.width,le.height,0,ye,pe,le.data)}}}else{if(X=m.mipmaps,Le&&$e){X.length>0&&se++;const $=ve(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,ke,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Le?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,ye,pe,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ke,he[$].width,he[$].height,0,ye,pe,he[$].data);for(let fe=0;fe<X.length;fe++){const De=X[fe].image[$].image;Le?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,De.width,De.height,ye,pe,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,ke,De.width,De.height,0,ye,pe,De.data)}}else{Le?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,pe,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ke,ye,pe,he[$]);for(let fe=0;fe<X.length;fe++){const le=X[fe];Le?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,0,0,ye,pe,le.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe+1,ke,ye,pe,le.image[$])}}}p(m)&&u(i.TEXTURE_CUBE_MAP),K.__version=Z.version,m.onUpdate&&m.onUpdate(m)}S.__version=m.version}function ce(S,m,F,Y,Z,K){const _e=s.convert(F.format,F.colorSpace),re=s.convert(F.type),ue=T(F.internalFormat,_e,re,F.colorSpace),Be=n.get(m),ee=n.get(F);if(ee.__renderTarget=m,!Be.__hasExternalTextures){const he=Math.max(1,m.width>>K),Te=Math.max(1,m.height>>K);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,ue,he,Te,m.depth,0,_e,re,null):t.texImage2D(Z,K,ue,he,Te,0,_e,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Fe(m)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,Oe(m)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(S,m,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),m.depthBuffer){const Y=m.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,K=b(m.stencilBuffer,Z),_e=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Oe(m);Fe(m)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,K,m.width,m.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,K,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,K,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,S)}else{const Y=m.textures;for(let Z=0;Z<Y.length;Z++){const K=Y[Z],_e=s.convert(K.format,K.colorSpace),re=s.convert(K.type),ue=T(K.internalFormat,_e,re,K.colorSpace),Be=Oe(m);F&&Fe(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ue,m.width,m.height):Fe(m)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,ue,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ue,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(S,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(m.depthTexture);Y.__renderTarget=m,(!Y.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),q(m.depthTexture,0);const Z=Y.__webglTexture,K=Oe(m);if(m.depthTexture.format===gi)Fe(m)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(m.depthTexture.format===Un)Fe(m)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(S){const m=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Y){const Z=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),m.__depthDisposeCallback=Z}m.__boundDepthTexture=Y}if(S.depthTexture&&!m.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ee(m.__webglFramebuffer,S)}else if(F){m.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[Y]),m.__webglDepthbuffer[Y]===void 0)m.__webglDepthbuffer[Y]=i.createRenderbuffer(),ae(m.__webglDepthbuffer[Y],S,!1);else{const Z=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=m.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),ae(m.__webglDepthbuffer,S,!1);else{const Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(S,m,F){const Y=n.get(S);m!==void 0&&ce(Y.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ve(S)}function it(S){const m=S.texture,F=n.get(S),Y=n.get(m);S.addEventListener("dispose",L);const Z=S.textures,K=S.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=m.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let ue=0;ue<m.mipmaps.length;ue++)F.__webglFramebuffer[re][ue]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<m.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(_e)for(let re=0,ue=Z.length;re<ue;re++){const Be=n.get(Z[re]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&Fe(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const ue=Z[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Be=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),he=T(ue.internalFormat,Be,ee,ue.colorSpace,S.isXRRenderTarget===!0),Te=Oe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,he,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(i.TEXTURE_CUBE_MAP,m);for(let re=0;re<6;re++)if(m.mipmaps&&m.mipmaps.length>0)for(let ue=0;ue<m.mipmaps.length;ue++)ce(F.__webglFramebuffer[re][ue],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ce(F.__webglFramebuffer[re],S,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(m)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let re=0,ue=Z.length;re<ue;re++){const Be=Z[re],ee=n.get(Be);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),ge(i.TEXTURE_2D,Be),ce(F.__webglFramebuffer,S,Be,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),p(Be)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),ge(re,m),m.mipmaps&&m.mipmaps.length>0)for(let ue=0;ue<m.mipmaps.length;ue++)ce(F.__webglFramebuffer[ue],S,m,i.COLOR_ATTACHMENT0,re,ue);else ce(F.__webglFramebuffer,S,m,i.COLOR_ATTACHMENT0,re,0);p(m)&&u(re),t.unbindTexture()}S.depthBuffer&&Ve(S)}function et(S){const m=S.textures;for(let F=0,Y=m.length;F<Y;F++){const Z=m[F];if(p(Z)){const K=R(S),_e=n.get(Z).__webglTexture;t.bindTexture(K,_e),u(K),t.unbindTexture()}}}const Ne=[],y=[];function Mt(S){if(S.samples>0){if(Fe(S)===!1){const m=S.textures,F=S.width,Y=S.height;let Z=i.COLOR_BUFFER_BIT;const K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(S),re=m.length>1;if(re)for(let ue=0;ue<m.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ue=0;ue<m.length;ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const Be=n.get(m[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Z,i.NEAREST),f===!0&&(Ne.length=0,y.length=0,Ne.push(i.COLOR_ATTACHMENT0+ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ne.push(K),y.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<m.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const Be=n.get(m[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&f){const m=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function Oe(S){return Math.min(a.maxSamples,S.samples)}function Fe(S){const m=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function xe(S){const m=o.render.frame;l.get(S)!==m&&(l.set(S,m),S.update())}function Ze(S,m){const F=S.colorSpace,Y=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Gn&&F!==tn&&(st.getTransfer(F)===je?(Y!==Ut||Z!==jt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),m}function ve(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(d.width=S.naturalWidth||S.width,d.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(d.width=S.displayWidth,d.height=S.displayHeight):(d.width=S.width,d.height=S.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=N,this.rebindTextures=Ae,this.setupRenderTarget=it,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Fe}function Yd(i,e){function t(n,a=tn){let s;const o=st.getTransfer(a);if(n===jt)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ho)return i.BYTE;if(n===po)return i.SHORT;if(n===Nn)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===mo)return i.ALPHA;if(n===go)return i.RGB;if(n===Ut)return i.RGBA;if(n===_o)return i.LUMINANCE;if(n===vo)return i.LUMINANCE_ALPHA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Un)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Mo)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===es)return i.RGBA_INTEGER;if(n===Kn||n===Yn||n===$n||n===Zn)if(o===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Kn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Kn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$n)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zn)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pi||n===Di||n===Li||n===Ui)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pi)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Di)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Li)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ui)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ii||n===Ni||n===Oi)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ii||n===Ni)return o===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fi||n===ki||n===Bi||n===Gi||n===Hi||n===zi||n===Vi||n===Wi||n===Xi||n===qi||n===Ki||n===Yi||n===$i||n===Zi)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ki)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ki)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$i)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zi)return o===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jn||n===ji||n===Qi)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jn)return o===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ji)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qi)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===Ji||n===ea||n===ta)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===jn)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ji)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ta)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const $d=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new Za,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:$d,fragmentShader:Zd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qd extends Ps{constructor(e,t){super();const n=this;let a=null,s=1,o=null,r="local-floor",f=1,d=null,l=null,c=null,g=null,h=null,x=null;const E=new jd,p=t.getContextAttributes();let u=null,R=null;const T=[],b=[],A=new ut;let C=null;const L=new mn;L.viewport=new _t;const z=new mn;z.viewport=new _t;const M=[L,z],v=new Ds;let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=T[W];return J===void 0&&(J=new Xn,T[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=T[W];return J===void 0&&(J=new Xn,T[W]=J),J.getGripSpace()},this.getHand=function(W){let J=T[W];return J===void 0&&(J=new Xn,T[W]=J),J.getHandSpace()};function U(W){const J=b.indexOf(W.inputSource);if(J===-1)return;const ce=T[J];ce!==void 0&&(ce.update(W.inputSource,W.frame,d||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){a.removeEventListener("select",U),a.removeEventListener("selectstart",U),a.removeEventListener("selectend",U),a.removeEventListener("squeeze",U),a.removeEventListener("squeezestart",U),a.removeEventListener("squeezeend",U),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",q);for(let W=0;W<T.length;W++){const J=b[W];J!==null&&(b[W]=null,T[W].disconnect(J))}w=null,V=null,E.reset(),e.setRenderTarget(u),h=null,g=null,c=null,a=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return g!==null?g:h},this.getBinding=function(){return c},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",U),a.addEventListener("selectstart",U),a.addEventListener("selectend",U),a.addEventListener("squeeze",U),a.addEventListener("squeezestart",U),a.addEventListener("squeezeend",U),a.addEventListener("end",O),a.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ae=null,Ee=null;p.depth&&(Ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?Un:gi,ae=p.stencil?xn:Mn);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};c=new XRWebGLBinding(a,t),g=c.createProjectionLayer(Ve),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new sn(g.textureWidth,g.textureHeight,{format:Ut,type:jt,depthTexture:new Xa(g.textureWidth,g.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new sn(h.framebufferWidth,h.framebufferHeight,{format:Ut,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,o=await a.requestReferenceSpace(r),Re.setContext(a),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function q(W){for(let J=0;J<W.removed.length;J++){const ce=W.removed[J],ae=b.indexOf(ce);ae>=0&&(b[ae]=null,T[ae].disconnect(ce))}for(let J=0;J<W.added.length;J++){const ce=W.added[J];let ae=b.indexOf(ce);if(ae===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=b.length){b.push(ce),ae=Ve;break}else if(b[Ve]===null){b[Ve]=ce,ae=Ve;break}if(ae===-1)break}const Ee=T[ae];Ee&&Ee.connect(ce)}}const H=new be,B=new be;function N(W,J,ce){H.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(ce.matrixWorld);const ae=H.distanceTo(B),Ee=J.projectionMatrix.elements,Ve=ce.projectionMatrix.elements,Ae=Ee[14]/(Ee[10]-1),it=Ee[14]/(Ee[10]+1),et=(Ee[9]+1)/Ee[5],Ne=(Ee[9]-1)/Ee[5],y=(Ee[8]-1)/Ee[0],Mt=(Ve[8]+1)/Ve[0],Oe=Ae*y,Fe=Ae*Mt,xe=ae/(-y+Mt),Ze=xe*-y;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ze),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ve=Ae+xe,S=it+xe,m=Oe-Ze,F=Fe+(ae-Ze),Y=et*it/S*ve,Z=Ne*it/S*ve;W.projectionMatrix.makePerspective(m,F,Y,Z,ve,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let J=W.near,ce=W.far;E.texture!==null&&(E.depthNear>0&&(J=E.depthNear),E.depthFar>0&&(ce=E.depthFar)),v.near=z.near=L.near=J,v.far=z.far=L.far=ce,(w!==v.near||V!==v.far)&&(a.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,V=v.far),L.layers.mask=W.layers.mask|2,z.layers.mask=W.layers.mask|4,v.layers.mask=L.layers.mask|z.layers.mask;const ae=W.parent,Ee=v.cameras;j(v,ae);for(let Ve=0;Ve<Ee.length;Ve++)j(Ee[Ve],ae);Ee.length===2?N(v,L,z):v.projectionMatrix.copy(L.projectionMatrix),te(W,v,ae)};function te(W,J,ce){ce===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ls*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(g===null&&h===null))return f},this.setFoveation=function(W){f=W,g!==null&&(g.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let ne=null;function ge(W,J){if(l=J.getViewerPose(d||o),x=J,l!==null){const ce=l.views;h!==null&&(e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R));let ae=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let Ae=0;Ae<ce.length;Ae++){const it=ce[Ae];let et=null;if(h!==null)et=h.getViewport(it);else{const y=c.getViewSubImage(g,it);et=y.viewport,Ae===0&&(e.setRenderTargetTextures(R,y.colorTexture,g.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(R))}let Ne=M[Ae];Ne===void 0&&(Ne=new mn,Ne.layers.enable(Ae),Ne.viewport=new _t,M[Ae]=Ne),Ne.matrix.fromArray(it.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(it.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(v.matrix.copy(Ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ne)}const Ee=a.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&c){const Ae=c.getDepthInformation(ce[0]);Ae&&Ae.isValid&&Ae.texture&&E.init(e,Ae,a.renderState)}}for(let ce=0;ce<T.length;ce++){const ae=b[ce],Ee=T[ce];ae!==null&&Ee!==void 0&&Ee.update(ae,J,d||o)}ne&&ne(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),x=null}const Re=new ds;Re.setAnimationLoop(ge),this.setAnimationLoop=function(W){ne=W},this.dispose=function(){}}}const zt=new is,Jd=new Ft;function eu(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ns(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function a(p,u,R,T,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),c(p,u)):u.isMeshPhongMaterial?(s(p,u),l(p,u)):u.isMeshStandardMaterial?(s(p,u),g(p,u),u.isMeshPhysicalMaterial&&h(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),E(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&r(p,u)):u.isPointsMaterial?f(p,u,R,T):u.isSpriteMaterial?d(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===xt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===xt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const R=e.get(u),T=R.envMap,b=R.envMapRotation;T&&(p.envMap.value=T,zt.copy(b),zt.x*=-1,zt.y*=-1,zt.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zt.y*=-1,zt.z*=-1),p.envMapRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(zt)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function r(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function f(p,u,R,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*R,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function c(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function g(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function h(p,u,R){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function E(p,u){const R=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function tu(i,e,t,n){let a={},s={},o=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,T){const b=T.program;n.uniformBlockBinding(R,b)}function d(R,T){let b=a[R.id];b===void 0&&(x(R),b=l(R),a[R.id]=b,R.addEventListener("dispose",p));const A=T.program;n.updateUBOMapping(R,A);const C=e.render.frame;s[R.id]!==C&&(g(R),s[R.id]=C)}function l(R){const T=c();R.__bindingPointIndex=T;const b=i.createBuffer(),A=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function c(){for(let R=0;R<r;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const T=a[R.id],b=R.uniforms,A=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,L=b.length;C<L;C++){const z=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,v=z.length;M<v;M++){const w=z[M];if(h(w,C,M,A)===!0){const V=w.__offset,U=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let q=0;q<U.length;q++){const H=U[q],B=E(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+O,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,O),O+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(R,T,b,A){const C=R.value,L=T+"_"+b;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{const z=A[L];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return A[L]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function x(R){const T=R.uniforms;let b=0;const A=16;for(let L=0,z=T.length;L<z;L++){const M=Array.isArray(T[L])?T[L]:[T[L]];for(let v=0,w=M.length;v<w;v++){const V=M[v],U=Array.isArray(V.value)?V.value:[V.value];for(let O=0,q=U.length;O<q;O++){const H=U[O],B=E(H),N=b%A,j=N%B.boundary,te=N+j;b+=j,te!==0&&A-te<B.storage&&(b+=A-te),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=B.storage}}}const C=b%A;return C>0&&(b+=A-C),R.__size=b,R.__cache={},this}function E(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function p(R){const T=R.target;T.removeEventListener("dispose",p);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function u(){for(const R in a)i.deleteBuffer(a[R]);o=[],a={},s={}}return{bind:f,update:d,dispose:u}}class nu{constructor(e={}){const{canvas:t=Ts(),context:n=null,depth:a=!0,stencil:s=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const x=new Uint32Array(4),E=new Int32Array(4);let p=null,u=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Nt,this.toneMappingExposure=1;const b=this;let A=!1,C=0,L=0,z=null,M=-1,v=null;const w=new _t,V=new _t;let U=null;const O=new Pe(0);let q=0,H=t.width,B=t.height,N=1,j=null,te=null;const ne=new _t(0,0,H,B),ge=new _t(0,0,H,B);let Re=!1;const W=new Wa;let J=!1,ce=!1;this.transmissionResolutionScale=1;const ae=new Ft,Ee=new Ft,Ve=new be,Ae=new _t,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ne(){return z===null?N:1}let y=n;function Mt(_,D){return t.getContext(_,D)}try{const _={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${As}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",le,!1),y===null){const D="webgl2";if(y=Mt(D,_),y===null)throw Mt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Oe,Fe,xe,Ze,ve,S,m,F,Y,Z,K,_e,re,ue,Be,ee,he,Te,ye,pe,ke,Le,$e,P;function se(){Oe=new uf(y),Oe.init(),Le=new Yd(y,Oe),Fe=new sf(y,Oe,e,Le),xe=new qd(y,Oe),Fe.reverseDepthBuffer&&g&&xe.buffers.depth.setReversed(!0),Ze=new mf(y),ve=new Ud,S=new Kd(y,Oe,xe,ve,Fe,Le,Ze),m=new rf(b),F=new df(b),Y=new Mr(y),$e=new nf(y,Y),Z=new hf(y,Y,Ze,$e),K=new _f(y,Z,Y,Ze),ye=new gf(y,Fe,S),ee=new of(ve),_e=new Ld(b,m,F,Oe,Fe,$e,ee),re=new eu(b,ve),ue=new Nd,Be=new Hd(Oe),Te=new tf(b,m,F,xe,K,h,f),he=new Wd(b,K,Fe),P=new tu(y,Ze,Fe,xe),pe=new af(y,Oe,Ze),ke=new pf(y,Oe,Ze),Ze.programs=_e.programs,b.capabilities=Fe,b.extensions=Oe,b.properties=ve,b.renderLists=ue,b.shadowMap=he,b.state=xe,b.info=Ze}se();const X=new Qd(b,y);this.xr=X,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const _=Oe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Oe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(_){_!==void 0&&(N=_,this.setSize(H,B,!1))},this.getSize=function(_){return _.set(H,B)},this.setSize=function(_,D,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=_,B=D,t.width=Math.floor(_*N),t.height=Math.floor(D*N),k===!0&&(t.style.width=_+"px",t.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(H*N,B*N).floor()},this.setDrawingBufferSize=function(_,D,k){H=_,B=D,N=k,t.width=Math.floor(_*k),t.height=Math.floor(D*k),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy(ne)},this.setViewport=function(_,D,k,G){_.isVector4?ne.set(_.x,_.y,_.z,_.w):ne.set(_,D,k,G),xe.viewport(w.copy(ne).multiplyScalar(N).round())},this.getScissor=function(_){return _.copy(ge)},this.setScissor=function(_,D,k,G){_.isVector4?ge.set(_.x,_.y,_.z,_.w):ge.set(_,D,k,G),xe.scissor(V.copy(ge).multiplyScalar(N).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(_){xe.setScissorTest(Re=_)},this.setOpaqueSort=function(_){j=_},this.setTransparentSort=function(_){te=_},this.getClearColor=function(_){return _.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,k=!0){let G=0;if(_){let I=!1;if(z!==null){const Q=z.texture.format;I=Q===es||Q===Ja||Q===Qa}if(I){const Q=z.texture.type,oe=Q===jt||Q===Mn||Q===Nn||Q===xn||Q===Ya||Q===$a,de=Te.getClearColor(),me=Te.getClearAlpha(),we=de.r,Ce=de.g,Me=de.b;oe?(x[0]=we,x[1]=Ce,x[2]=Me,x[3]=me,y.clearBufferuiv(y.COLOR,0,x)):(E[0]=we,E[1]=Ce,E[2]=Me,E[3]=me,y.clearBufferiv(y.COLOR,0,E))}else G|=y.COLOR_BUFFER_BIT}D&&(G|=y.DEPTH_BUFFER_BIT),k&&(G|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),ue.dispose(),Be.dispose(),ve.dispose(),m.dispose(),F.dispose(),K.dispose(),$e.dispose(),P.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",bi),X.removeEventListener("sessionend",Ti),Bt.stop()};function $(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const _=Ze.autoReset,D=he.enabled,k=he.autoUpdate,G=he.needsUpdate,I=he.type;se(),Ze.autoReset=_,he.enabled=D,he.autoUpdate=k,he.needsUpdate=G,he.type=I}function le(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function De(_){const D=_.target;D.removeEventListener("dispose",De),tt(D)}function tt(_){dt(_),ve.remove(_)}function dt(_){const D=ve.get(_).programs;D!==void 0&&(D.forEach(function(k){_e.releaseProgram(k)}),_.isShaderMaterial&&_e.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,k,G,I,Q){D===null&&(D=it);const oe=I.isMesh&&I.matrixWorld.determinant()<0,de=vs(_,D,k,G,I);xe.setMaterial(G,oe);let me=k.index,we=1;if(G.wireframe===!0){if(me=Z.getWireframeAttribute(k),me===void 0)return;we=2}const Ce=k.drawRange,Me=k.attributes.position;let Ge=Ce.start*we,Xe=(Ce.start+Ce.count)*we;Q!==null&&(Ge=Math.max(Ge,Q.start*we),Xe=Math.min(Xe,(Q.start+Q.count)*we)),me!==null?(Ge=Math.max(Ge,0),Xe=Math.min(Xe,me.count)):Me!=null&&(Ge=Math.max(Ge,0),Xe=Math.min(Xe,Me.count));const at=Xe-Ge;if(at<0||at===1/0)return;$e.setup(I,G,de,k,me);let nt,He=pe;if(me!==null&&(nt=Y.get(me),He=ke,He.setIndex(nt)),I.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*Ne()),He.setMode(y.LINES)):He.setMode(y.TRIANGLES);else if(I.isLine){let Se=G.linewidth;Se===void 0&&(Se=1),xe.setLineWidth(Se*Ne()),I.isLineSegments?He.setMode(y.LINES):I.isLineLoop?He.setMode(y.LINE_LOOP):He.setMode(y.LINE_STRIP)}else I.isPoints?He.setMode(y.POINTS):I.isSprite&&He.setMode(y.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Vt("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))He.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Se=I._multiDrawStarts,ft=I._multiDrawCounts,qe=I._multiDrawCount,Tt=me?Y.get(me).bytesPerElement:1,Qt=ve.get(G).currentProgram.getUniforms();for(let vt=0;vt<qe;vt++)Qt.setValue(y,"_gl_DrawID",vt),He.render(Se[vt]/Tt,ft[vt])}else if(I.isInstancedMesh)He.renderInstances(Ge,at,I.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ft=Math.min(k.instanceCount,Se);He.renderInstances(Ge,at,ft)}else He.render(Ge,at)};function Ke(_,D,k){_.transparent===!0&&_.side===pt&&_.forceSinglePass===!1?(_.side=xt,_.needsUpdate=!0,An(_,D,k),_.side=on,_.needsUpdate=!0,An(_,D,k),_.side=pt):An(_,D,k)}this.compile=function(_,D,k=null){k===null&&(k=_),u=Be.get(k),u.init(D),T.push(u),k.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),_!==k&&_.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const G=new Set;return _.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const de=Q[oe];Ke(de,k,I),G.add(de)}else Ke(Q,k,I),G.add(Q)}),u=T.pop(),G},this.compileAsync=function(_,D,k=null){const G=this.compile(_,D,k);return new Promise(I=>{function Q(){if(G.forEach(function(oe){ve.get(oe).currentProgram.isReady()&&G.delete(oe)}),G.size===0){I(_);return}setTimeout(Q,10)}Oe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let bt=null;function wt(_){bt&&bt(_)}function bi(){Bt.stop()}function Ti(){Bt.start()}const Bt=new ds;Bt.setAnimationLoop(wt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(_){bt=_,X.setAnimationLoop(_),_===null?Bt.stop():Bt.start()},X.addEventListener("sessionstart",bi),X.addEventListener("sessionend",Ti),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),_.isScene===!0&&_.onBeforeRender(b,_,D,z),u=Be.get(_,T.length),u.init(D),T.push(u),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,J=ee.init(this.clippingPlanes,ce),p=ue.get(_,R.length),p.init(),R.push(p),X.enabled===!0&&X.isPresenting===!0){const Q=b.xr.getDepthSensingMesh();Q!==null&&Vn(Q,D,-1/0,b.sortObjects)}Vn(_,D,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(j,te),et=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,et&&Te.addToRenderList(p,_),this.info.render.frame++,J===!0&&ee.beginShadows();const k=u.state.shadowsArray;he.render(k,_,D),J===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,I=p.transmissive;if(u.setupLights(),D.isArrayCamera){const Q=D.cameras;if(I.length>0)for(let oe=0,de=Q.length;oe<de;oe++){const me=Q[oe];Ri(G,I,_,me)}et&&Te.render(_);for(let oe=0,de=Q.length;oe<de;oe++){const me=Q[oe];Ai(p,_,me,me.viewport)}}else I.length>0&&Ri(G,I,_,D),et&&Te.render(_),Ai(p,_,D);z!==null&&L===0&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),_.isScene===!0&&_.onAfterRender(b,_,D),$e.resetDefaultState(),M=-1,v=null,T.pop(),T.length>0?(u=T[T.length-1],J===!0&&ee.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function Vn(_,D,k,G){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)u.pushLight(_),_.castShadow&&u.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||W.intersectsSprite(_)){G&&Ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ee);const oe=K.update(_),de=_.material;de.visible&&p.push(_,oe,de,k,Ae.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||W.intersectsObject(_))){const oe=K.update(_),de=_.material;if(G&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ae.copy(_.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ae.copy(oe.boundingSphere.center)),Ae.applyMatrix4(_.matrixWorld).applyMatrix4(Ee)),Array.isArray(de)){const me=oe.groups;for(let we=0,Ce=me.length;we<Ce;we++){const Me=me[we],Ge=de[Me.materialIndex];Ge&&Ge.visible&&p.push(_,oe,Ge,k,Ae.z,Me)}}else de.visible&&p.push(_,oe,de,k,Ae.z,null)}}const Q=_.children;for(let oe=0,de=Q.length;oe<de;oe++)Vn(Q[oe],D,k,G)}function Ai(_,D,k,G){const I=_.opaque,Q=_.transmissive,oe=_.transparent;u.setupLightsView(k),J===!0&&ee.setGlobalState(b.clippingPlanes,k),G&&xe.viewport(w.copy(G)),I.length>0&&Tn(I,D,k),Q.length>0&&Tn(Q,D,k),oe.length>0&&Tn(oe,D,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ri(_,D,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Bn:jt,minFilter:hn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const Q=u.state.transmissionRenderTarget[G.id],oe=G.viewport||w;Q.setSize(oe.z*b.transmissionResolutionScale,oe.w*b.transmissionResolutionScale);const de=b.getRenderTarget();b.setRenderTarget(Q),b.getClearColor(O),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),et&&Te.render(k);const me=b.toneMapping;b.toneMapping=Nt;const we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),J===!0&&ee.setGlobalState(b.clippingPlanes,G),Tn(_,k,G),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Me=0,Ge=D.length;Me<Ge;Me++){const Xe=D[Me],at=Xe.object,nt=Xe.geometry,He=Xe.material,Se=Xe.group;if(He.side===pt&&at.layers.test(G.layers)){const ft=He.side;He.side=xt,He.needsUpdate=!0,yi(at,k,G,nt,He,Se),He.side=ft,He.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}b.setRenderTarget(de),b.setClearColor(O,q),we!==void 0&&(G.viewport=we),b.toneMapping=me}function Tn(_,D,k){const G=D.isScene===!0?D.overrideMaterial:null;for(let I=0,Q=_.length;I<Q;I++){const oe=_[I],de=oe.object,me=oe.geometry,we=G===null?oe.material:G,Ce=oe.group;de.layers.test(k.layers)&&yi(de,D,k,me,we,Ce)}}function yi(_,D,k,G,I,Q){_.onBeforeRender(b,D,k,G,I,Q),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),I.onBeforeRender(b,D,k,G,_,Q),I.transparent===!0&&I.side===pt&&I.forceSinglePass===!1?(I.side=xt,I.needsUpdate=!0,b.renderBufferDirect(k,D,G,I,_,Q),I.side=on,I.needsUpdate=!0,b.renderBufferDirect(k,D,G,I,_,Q),I.side=pt):b.renderBufferDirect(k,D,G,I,_,Q),_.onAfterRender(b,D,k,G,I,Q)}function An(_,D,k){D.isScene!==!0&&(D=it);const G=ve.get(_),I=u.state.lights,Q=u.state.shadowsArray,oe=I.state.version,de=_e.getParameters(_,I.state,Q,D,k),me=_e.getProgramCacheKey(de);let we=G.programs;G.environment=_.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(_.isMeshStandardMaterial?F:m).get(_.envMap||G.environment),G.envMapRotation=G.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,we===void 0&&(_.addEventListener("dispose",De),we=new Map,G.programs=we);let Ce=we.get(me);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===oe)return Ci(_,de),Ce}else de.uniforms=_e.getUniforms(_),_.onBeforeCompile(de,b),Ce=_e.acquireProgram(de,me),we.set(me,Ce),G.uniforms=de.uniforms;const Me=G.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=ee.uniform),Ci(_,de),G.needsLights=Ms(_),G.lightsStateVersion=oe,G.needsLights&&(Me.ambientLightColor.value=I.state.ambient,Me.lightProbe.value=I.state.probe,Me.directionalLights.value=I.state.directional,Me.directionalLightShadows.value=I.state.directionalShadow,Me.spotLights.value=I.state.spot,Me.spotLightShadows.value=I.state.spotShadow,Me.rectAreaLights.value=I.state.rectArea,Me.ltc_1.value=I.state.rectAreaLTC1,Me.ltc_2.value=I.state.rectAreaLTC2,Me.pointLights.value=I.state.point,Me.pointLightShadows.value=I.state.pointShadow,Me.hemisphereLights.value=I.state.hemi,Me.directionalShadowMap.value=I.state.directionalShadowMap,Me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Me.spotShadowMap.value=I.state.spotShadowMap,Me.spotLightMatrix.value=I.state.spotLightMatrix,Me.spotLightMap.value=I.state.spotLightMap,Me.pointShadowMap.value=I.state.pointShadowMap,Me.pointShadowMatrix.value=I.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function wi(_){if(_.uniformsList===null){const D=_.currentProgram.getUniforms();_.uniformsList=Ln.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Ci(_,D){const k=ve.get(_);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function vs(_,D,k,G,I){D.isScene!==!0&&(D=it),S.resetTextureUnits();const Q=D.fog,oe=G.isMeshStandardMaterial?D.environment:null,de=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Gn,me=(G.isMeshStandardMaterial?F:m).get(G.envMap||oe),we=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,Xe=!!k.morphAttributes.color;let at=Nt;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(at=b.toneMapping);const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,He=nt!==void 0?nt.length:0,Se=ve.get(G),ft=u.state.lights;if(J===!0&&(ce===!0||_!==v)){const ht=_===v&&G.id===M;ee.setState(G,_,ht)}let qe=!1;G.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==ft.state.version||Se.outputColorSpace!==de||I.isBatchedMesh&&Se.batching===!1||!I.isBatchedMesh&&Se.batching===!0||I.isBatchedMesh&&Se.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Se.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Se.instancing===!1||!I.isInstancedMesh&&Se.instancing===!0||I.isSkinnedMesh&&Se.skinning===!1||!I.isSkinnedMesh&&Se.skinning===!0||I.isInstancedMesh&&Se.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Se.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Se.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Se.instancingMorph===!1&&I.morphTexture!==null||Se.envMap!==me||G.fog===!0&&Se.fog!==Q||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==we||Se.vertexTangents!==Ce||Se.morphTargets!==Me||Se.morphNormals!==Ge||Se.morphColors!==Xe||Se.toneMapping!==at||Se.morphTargetsCount!==He)&&(qe=!0):(qe=!0,Se.__version=G.version);let Tt=Se.currentProgram;qe===!0&&(Tt=An(G,D,I));let Qt=!1,vt=!1,fn=!1;const Qe=Tt.getUniforms(),St=Se.uniforms;if(xe.useProgram(Tt.program)&&(Qt=!0,vt=!0,fn=!0),G.id!==M&&(M=G.id,vt=!0),Qt||v!==_){xe.buffers.depth.getReversed()?(ae.copy(_.projectionMatrix),Rs(ae),ys(ae),Qe.setValue(y,"projectionMatrix",ae)):Qe.setValue(y,"projectionMatrix",_.projectionMatrix),Qe.setValue(y,"viewMatrix",_.matrixWorldInverse);const mt=Qe.map.cameraPosition;mt!==void 0&&mt.setValue(y,Ve.setFromMatrixPosition(_.matrixWorld)),Fe.logarithmicDepthBuffer&&Qe.setValue(y,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Qe.setValue(y,"isOrthographic",_.isOrthographicCamera===!0),v!==_&&(v=_,vt=!0,fn=!0)}if(I.isSkinnedMesh){Qe.setOptional(y,I,"bindMatrix"),Qe.setOptional(y,I,"bindMatrixInverse");const ht=I.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),Qe.setValue(y,"boneTexture",ht.boneTexture,S))}I.isBatchedMesh&&(Qe.setOptional(y,I,"batchingTexture"),Qe.setValue(y,"batchingTexture",I._matricesTexture,S),Qe.setOptional(y,I,"batchingIdTexture"),Qe.setValue(y,"batchingIdTexture",I._indirectTexture,S),Qe.setOptional(y,I,"batchingColorTexture"),I._colorsTexture!==null&&Qe.setValue(y,"batchingColorTexture",I._colorsTexture,S));const Et=k.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&ye.update(I,k,Tt),(vt||Se.receiveShadow!==I.receiveShadow)&&(Se.receiveShadow=I.receiveShadow,Qe.setValue(y,"receiveShadow",I.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(St.envMap.value=me,St.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(St.envMapIntensity.value=D.environmentIntensity),vt&&(Qe.setValue(y,"toneMappingExposure",b.toneMappingExposure),Se.needsLights&&xs(St,fn),Q&&G.fog===!0&&re.refreshFogUniforms(St,Q),re.refreshMaterialUniforms(St,G,N,B,u.state.transmissionRenderTarget[_.id]),Ln.upload(y,wi(Se),St,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ln.upload(y,wi(Se),St,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Qe.setValue(y,"center",I.center),Qe.setValue(y,"modelViewMatrix",I.modelViewMatrix),Qe.setValue(y,"normalMatrix",I.normalMatrix),Qe.setValue(y,"modelMatrix",I.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ht=G.uniformsGroups;for(let mt=0,Wn=ht.length;mt<Wn;mt++){const Gt=ht[mt];P.update(Gt,Tt),P.bind(Gt,Tt)}}return Tt}function xs(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function Ms(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(_,D,k){ve.get(_.texture).__webglTexture=D,ve.get(_.depthTexture).__webglTexture=k;const G=ve.get(_);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,D){const k=ve.get(_);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0};const Ss=y.createFramebuffer();this.setRenderTarget=function(_,D=0,k=0){z=_,C=D,L=k;let G=!0,I=null,Q=!1,oe=!1;if(_){const me=ve.get(_);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(y.FRAMEBUFFER,null),G=!1;else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(_);else if(me.__hasExternalTextures)S.rebindTextures(_,ve.get(_.texture).__webglTexture,ve.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Me=_.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&ve.has(Me)&&(_.width!==Me.image.width||_.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(_)}}const we=_.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(oe=!0);const Ce=ve.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?I=Ce[D][k]:I=Ce[D],Q=!0):_.samples>0&&S.useMultisampledRTT(_)===!1?I=ve.get(_).__webglMultisampledFramebuffer:Array.isArray(Ce)?I=Ce[k]:I=Ce,w.copy(_.viewport),V.copy(_.scissor),U=_.scissorTest}else w.copy(ne).multiplyScalar(N).floor(),V.copy(ge).multiplyScalar(N).floor(),U=Re;if(k!==0&&(I=Ss),xe.bindFramebuffer(y.FRAMEBUFFER,I)&&G&&xe.drawBuffers(_,I),xe.viewport(w),xe.scissor(V),xe.setScissorTest(U),Q){const me=ve.get(_.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,k)}else if(oe){const me=ve.get(_.texture),we=D;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,me.__webglTexture,k,we)}else if(_!==null&&k!==0){const me=ve.get(_.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,me.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(_,D,k,G,I,Q,oe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de){xe.bindFramebuffer(y.FRAMEBUFFER,de);try{const me=_.texture,we=me.format,Ce=me.type;if(!Fe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-G&&k>=0&&k<=_.height-I&&y.readPixels(D,k,G,I,Le.convert(we),Le.convert(Ce),Q)}finally{const me=z!==null?ve.get(z).__webglFramebuffer:null;xe.bindFramebuffer(y.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(_,D,k,G,I,Q,oe){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&oe!==void 0&&(de=de[oe]),de){const me=_.texture,we=me.format,Ce=me.type;if(!Fe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=_.width-G&&k>=0&&k<=_.height-I){xe.bindFramebuffer(y.FRAMEBUFFER,de);const Me=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Me),y.bufferData(y.PIXEL_PACK_BUFFER,Q.byteLength,y.STREAM_READ),y.readPixels(D,k,G,I,Le.convert(we),Le.convert(Ce),0);const Ge=z!==null?ve.get(z).__webglFramebuffer:null;xe.bindFramebuffer(y.FRAMEBUFFER,Ge);const Xe=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ws(y,Xe,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Me),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Q),y.deleteBuffer(Me),y.deleteSync(Xe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,D=null,k=0){_.isTexture!==!0&&(Vt("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,_=arguments[1]);const G=Math.pow(2,-k),I=Math.floor(_.image.width*G),Q=Math.floor(_.image.height*G),oe=D!==null?D.x:0,de=D!==null?D.y:0;S.setTexture2D(_,0),y.copyTexSubImage2D(y.TEXTURE_2D,k,0,0,oe,de,I,Q),xe.unbindTexture()};const Es=y.createFramebuffer(),bs=y.createFramebuffer();this.copyTextureToTexture=function(_,D,k=null,G=null,I=0,Q=null){_.isTexture!==!0&&(Vt("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,_=arguments[1],D=arguments[2],Q=arguments[3]||0,k=null),Q===null&&(I!==0?(Vt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let oe,de,me,we,Ce,Me,Ge,Xe,at;const nt=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(k!==null)oe=k.max.x-k.min.x,de=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,Ce=k.min.y,Me=k.isBox3?k.min.z:0;else{const Et=Math.pow(2,-I);oe=Math.floor(nt.width*Et),de=Math.floor(nt.height*Et),_.isDataArrayTexture?me=nt.depth:_.isData3DTexture?me=Math.floor(nt.depth*Et):me=1,we=0,Ce=0,Me=0}G!==null?(Ge=G.x,Xe=G.y,at=G.z):(Ge=0,Xe=0,at=0);const He=Le.convert(D.format),Se=Le.convert(D.type);let ft;D.isData3DTexture?(S.setTexture3D(D,0),ft=y.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(S.setTexture2DArray(D,0),ft=y.TEXTURE_2D_ARRAY):(S.setTexture2D(D,0),ft=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,D.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,D.unpackAlignment);const qe=y.getParameter(y.UNPACK_ROW_LENGTH),Tt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Qt=y.getParameter(y.UNPACK_SKIP_PIXELS),vt=y.getParameter(y.UNPACK_SKIP_ROWS),fn=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,nt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,nt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,we),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ce),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Me);const Qe=_.isDataArrayTexture||_.isData3DTexture,St=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){const Et=ve.get(_),ht=ve.get(D),mt=ve.get(Et.__renderTarget),Wn=ve.get(ht.__renderTarget);xe.bindFramebuffer(y.READ_FRAMEBUFFER,mt.__webglFramebuffer),xe.bindFramebuffer(y.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Gt=0;Gt<me;Gt++)Qe&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ve.get(_).__webglTexture,I,Me+Gt),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,Q,at+Gt)),y.blitFramebuffer(we,Ce,oe,de,Ge,Xe,oe,de,y.DEPTH_BUFFER_BIT,y.NEAREST);xe.bindFramebuffer(y.READ_FRAMEBUFFER,null),xe.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(I!==0||_.isRenderTargetTexture||ve.has(_)){const Et=ve.get(_),ht=ve.get(D);xe.bindFramebuffer(y.READ_FRAMEBUFFER,Es),xe.bindFramebuffer(y.DRAW_FRAMEBUFFER,bs);for(let mt=0;mt<me;mt++)Qe?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Et.__webglTexture,I,Me+mt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Et.__webglTexture,I),St?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ht.__webglTexture,Q,at+mt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ht.__webglTexture,Q),I!==0?y.blitFramebuffer(we,Ce,oe,de,Ge,Xe,oe,de,y.COLOR_BUFFER_BIT,y.NEAREST):St?y.copyTexSubImage3D(ft,Q,Ge,Xe,at+mt,we,Ce,oe,de):y.copyTexSubImage2D(ft,Q,Ge,Xe,we,Ce,oe,de);xe.bindFramebuffer(y.READ_FRAMEBUFFER,null),xe.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else St?_.isDataTexture||_.isData3DTexture?y.texSubImage3D(ft,Q,Ge,Xe,at,oe,de,me,He,Se,nt.data):D.isCompressedArrayTexture?y.compressedTexSubImage3D(ft,Q,Ge,Xe,at,oe,de,me,He,nt.data):y.texSubImage3D(ft,Q,Ge,Xe,at,oe,de,me,He,Se,nt):_.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Q,Ge,Xe,oe,de,He,Se,nt.data):_.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Q,Ge,Xe,nt.width,nt.height,He,nt.data):y.texSubImage2D(y.TEXTURE_2D,Q,Ge,Xe,oe,de,He,Se,nt);y.pixelStorei(y.UNPACK_ROW_LENGTH,qe),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Tt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Qt),y.pixelStorei(y.UNPACK_SKIP_ROWS,vt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,fn),Q===0&&D.generateMipmaps&&y.generateMipmap(ft),xe.unbindTexture()},this.copyTextureToTexture3D=function(_,D,k=null,G=null,I=0){return _.isTexture!==!0&&(Vt("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,_=arguments[2],D=arguments[3],I=arguments[4]||0),Vt('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,D,k,G,I)},this.initRenderTarget=function(_){ve.get(_).__webglFramebuffer===void 0&&S.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?S.setTextureCube(_,0):_.isData3DTexture?S.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?S.setTexture2DArray(_,0):S.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){C=0,L=0,z=null,xe.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function gs(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),s={},o={},r=i[0].morphTargetsRelative,f=new yt;let d=0;for(let l=0;l<i.length;++l){const c=i[l];let g=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in c.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(c.attributes[h]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(r!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in c.morphAttributes){if(!a.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[h]===void 0&&(o[h]=[]),o[h].push(c.morphAttributes[h])}if(e){let h;if(t)h=c.index.count;else if(c.attributes.position!==void 0)h=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;f.addGroup(d,h,l),d+=h}}if(t){let l=0;const c=[];for(let g=0;g<i.length;++g){const h=i[g].index;for(let x=0;x<h.count;++x)c.push(h.getX(x)+l);l+=i[g].attributes.position.count}f.setIndex(c)}for(const l in s){const c=za(s[l]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;f.setAttribute(l,c)}for(const l in o){const c=o[l][0].length;if(c===0)break;f.morphAttributes=f.morphAttributes||{},f.morphAttributes[l]=[];for(let g=0;g<c;++g){const h=[];for(let E=0;E<o[l].length;++E)h.push(o[l][E][g]);const x=za(h);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;f.morphAttributes[l].push(x)}}return f}function za(i){let e,t,n,a=-1,s=0;for(let d=0;d<i.length;++d){const l=i[d];if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=l.gpuType),a!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=l.count*t}const o=new e(s),r=new Yt(o,t,n);let f=0;for(let d=0;d<i.length;++d){const l=i[d];if(l.isInterleavedBufferAttribute){const c=f/t;for(let g=0,h=l.count;g<h;g++)for(let x=0;x<t;x++){const E=l.getComponent(g,x);r.setComponent(g+c,x,E)}}else o.set(l.array,f);f+=l.count*t}return a!==void 0&&(r.gpuType=a),r}class iu{constructor(){this.geos=new Map,this.mats=new Map,this.resources=new Set}own(e){return this.resources.add(e),e}mat(e){return typeof e=="object"?e:(this.mats.has(e)||this.mats.set(e,this.own(new Zt({color:e,roughness:.84,flatShading:!0}))),this.mats.get(e))}geo(e,t){return this.geos.has(e)||this.geos.set(e,this.own(t())),this.geos.get(e)}group(e,t=0,n=0,a=0){const s=new vi;return s.position.set(t,n,a),e==null||e.add(s),s}mesh(e,t,n,a=0,s=0,o=0,r=1,f=1,d=1){const l=new Je(t,this.mat(n));return l.position.set(a,s,o),l.scale.set(r,f,d),l.castShadow=!0,l.receiveShadow=!0,e==null||e.add(l),l}box(e,t,n,a,s,o,r,f){return this.mesh(e,this.geo("box",()=>new _i(1,1,1)),f,t,n,a,s,o,r)}ball(e,t,n,a,s,o,r,f,d=1){return this.mesh(e,this.geo(`sphere${d}`,()=>new En(1,d===2?22:d===1?12:8,d===2?14:d===1?8:5)),f,t,n,a,s,o,r)}rock(e,t,n,a,s,o,r,f,d=0){return this.mesh(e,this.geo(`rock${d}`,()=>new Yo(1,d)),f,t,n,a,s,o,r)}cyl(e,t,n,a,s,o,r,f,d=8){const l=o===0?0:s/o,c=this.geo(`cyl${l.toFixed(3)}_${d}`,()=>new rs(l,1,1,d));return this.mesh(e,c,f,t,n,a,o,r,o)}rod(e,t,n,a,s,o=a,r=7){const f=new be(...t),l=new be(...n).clone().sub(f),c=this.cyl(e,(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2,o,a,l.length(),s,r);return c.quaternion.setFromUnitVectors(new be(0,1,0),l.normalize()),c}poly(e,t,n,a){const s=new cs;t.forEach(([f,d],l)=>l?s.lineTo(f,d):s.moveTo(f,d)),s.closePath();const o="poly"+t.flat().join(",")+"_"+n,r=this.geo(o,()=>new ls(s,{depth:n,bevelEnabled:!1}));return this.mesh(e,r,a)}bake(e,t=!1){e.updateWorldMatrix(!0,!0);const n=new Ft().copy(e.matrixWorld).invert(),a=[[],[]];e.traverse(r=>{if(!r.isMesh||r.material.map)return;const f=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone(),d=new Ft().multiplyMatrices(n,r.matrixWorld);f.applyMatrix4(d);for(const l of Object.keys(f.attributes))["position","normal","color"].includes(l)||f.deleteAttribute(l);if(f.attributes.normal||f.computeVertexNormals(),!f.attributes.color){const l=new Float32Array(f.attributes.position.count*3),c=r.material.color;for(let g=0;g<l.length;g+=3)l[g]=c.r,l[g+1]=c.g,l[g+2]=c.b;f.setAttribute("color",new Yt(l,3))}f.clearGroups(),a[r.castShadow?1:0].push(f)}),e.clear();const s=t?"__smooth":"__baked";let o=this.mats.get(s);return o||(o=this.own(new Zt({vertexColors:!0,roughness:.94,flatShading:!t,side:t?pt:on})),this.mats.set(s,o)),a.forEach((r,f)=>{if(!r.length)return;const d=this.own(gs(r,!1));r.forEach(c=>c.dispose());const l=new Je(d,o);l.castShadow=!!f,l.receiveShadow=!0,e.add(l)}),e}signText(e,t,n,a,s,o,r,f="#f8e7bb",d="#634938"){const l=document.createElement("canvas");l.width=512,l.height=128;const c=l.getContext("2d");c.fillStyle=d,c.fillRect(0,0,512,128),c.fillStyle=f,c.font="800 44px Nunito, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText(t,256,67,465);const g=this.own(new xi(l));g.colorSpace=kn;const h=this.own(new Zt({map:g,roughness:1})),x=this.mesh(e,this.geo("label",()=>new cn(1,1)),h,n,a,s,o,r,1);return x.castShadow=!1,x}dispose(){this.resources.forEach(e=>e.dispose()),this.resources.clear(),this.geos.clear(),this.mats.clear()}}const We=7754300,Ct=6047030,en=(i,e)=>i[Math.floor(e()*i.length)];class au{constructor(e){this.w=e,this.s=e.s,this.r=bn(7129),this.root=e.static}marker(e,t,n,a){return e.updateWorldMatrix(!0,!1),e.localToWorld(new be(t,n,a))}localBlock(e,t,n,a,s,o,r=!0){const f=this.marker(e,t,0,n);return this.w.block(f.x,f.z,a,s,e.rotation.y,o,r)}patch(e,t,n,a,s,o=.011){const r=this.s.cyl(this.root,e,o,t,1,1,.022,s,14);return r.scale.x*=n,r.scale.z*=a,r.castShadow=!1,r}stone(e,t,n,a,s,o,r,f){const d=this.s.rock(e,t,n,a,s,o,r,f);return d.rotation.y=this.r()*6,d}flower(e,t,n,a,s=1){const o=this.s,r=(.24+this.r()*.22)*s;o.rod(e,[t,0,n],[t+.035,r,n],.014*s,5536587,.009*s,4);const f=o.rock(e,t+.047,r*.5,n,.091*s,.031*s,.035*s,7906907);f.rotation.z=.6;for(let d=0;d<5;d++){const l=d*1.2566,c=o.ball(e,t+.035+Math.cos(l)*.064*s,r+.015,n+Math.sin(l)*.064*s,.067*s,.032*s,.053*s,a,0);c.rotation.y=-l}o.ball(e,t+.035,r+.035*s,n,.043*s,.034*s,.043*s,15973204,0)}grass(e,t,n=1,a=8563816){const s=this.s,o=s.mesh(this.root,s.geo("grassTuft",()=>{const r=[-.16,0,.04,-.1,0,-.01,-.24,.4,.03,-.06,0,.01,.05,0,.01,-.01,.56,-.03,.035,0,-.04,.14,0,.02,.22,.32,.05],f=new yt;return f.setAttribute("position",new At(r,3)),f.computeVertexNormals(),f}),a,e,.016,t,n,n,n);o.rotation.y=this.r()*6,o.castShadow=!1}tree(e,t,n=1,a="oak",s=!0){const o=this.s,r=o.group(this.root,e,0,t),f=this.r;r.scale.setScalar(n),r.rotation.y=f()*6;const d=a==="pink"?8808784:8151367;if(a==="pine"){o.cyl(r,0,1.55,0,.19,.36,3.2,d,7);const l=4.2+f()*.9;for(let c=0;c<4;c++){const g=[4288353,5275237,6394218,7577975][c],h=o.cyl(r,(c-1)*.04,1.6+c*.89,0,.1-c*.021,(1.57-c*.29)*(l/4.7),2.4-c*.21,g,8);h.rotation.y=.35*c}}else{const l=.2+f()*.25;o.rod(r,[0,.04,0],[l,2.6,.02],.37,d,.24,8),o.rod(r,[l,2.25,0],[-.8,3.3,.16],.19,d,.12),o.rod(r,[l,2.1,0],[1.05,3.28,-.24],.21,d,.105),o.rod(r,[l,1.7,0],[.32,3.05,.83],.15,d,.08);const c=a==="pink"?[14130076,15313319,15382440,13735573]:a==="gold"?[11843180,13220976,12172919,13027720]:[7183465,8433264,9878646,7709814];if([[-.77,3.55,.1,1.42,1.04,1.3],[.73,3.58,-.1,1.47,1.14,1.42],[.06,4.39,-.05,1.5,1.18,1.34],[.16,3.59,.82,1.27,.96,1.1],[-.05,3.7,-.95,1.21,.93,1.06]].forEach(([h,x,E,p,u,R],T)=>{o.rock(r,h,x,E,p,u,R,c[T%4],1).rotation.set(f()*.5,f()*5,f()*.3)}),a==="fruit")for(let h=0;h<12;h++){const x=f()*6.28,E=2.9+f()*1.2,p=1.46+f()*.23;o.ball(r,Math.sin(x)*p,E,Math.cos(x)*p,.13,.15,.13,en([14189401,14062937,13334869],f),0)}}for(let l=0;l<3;l++){const c=l*2.1;o.rod(r,[0,.39,0],[Math.sin(c)*.55,.04,Math.cos(c)*.55],.2,d,.035,6)}s&&(this.w.block(e,t,.62*n,.62*n,0,4.4*n,!0),this.patch(e,t,.93*n,.78*n,8759151,.022))}bush(e,t,n=1,a=7905898){const s=this.s;for(let o=0;o<3;o++){const r=s.rock(this.root,e+(o-1)*n*.39,n*(.25+this.r()*.11),t+this.r()*.25,n*.62,n*(.41+this.r()*.22),n*.54,a,0);r.rotation.y=this.r()*4}}fence(e,t,n=1.7){const a=this.s,s=Math.ceil(Math.hypot(t[0]-e[0],t[1]-e[1])/n),o=(t[0]-e[0])/s,r=(t[1]-e[1])/s;for(let l=0;l<=s;l++){const c=e[0]+o*l,g=e[1]+r*l,h=.91+this.r()*.15,x=a.cyl(this.root,c,h/2,g,.11,.14,h,10125398,5);if(x.rotation.y=.7,a.cyl(this.root,c,h+.065,g,0,.15,.15,12229737,5),l<s)for(const E of[.36,.72])a.rod(this.root,[c,E,g],[c+o,E+.025,g+r],.063,11176544,.07,5)}const f=(e[0]+t[0])/2,d=(e[1]+t[1])/2;this.w.block(f,d,Math.hypot(t[0]-e[0],t[1]-e[1]),.18,-Math.atan2(t[1]-e[1],t[0]-e[0]),.96,!1)}pot(e,t,n,a,s=.7){const o=this.s;o.cyl(e,t,n+.23*s,a,.32*s,.235*s,.46*s,12681306,9),o.cyl(e,t,n+.45*s,a,.35*s,.35*s,.105*s,14326380,9),o.cyl(e,t,n+.51*s,a,.282*s,.282*s,.02*s,6903099,9);for(let r=0;r<4;r++){const f=r*1.6,d=o.rock(e,t+Math.sin(f)*.14*s,n+.68*s,a+Math.cos(f)*.13*s,.105*s,.24*s,.13*s,6787937);d.rotation.z=Math.sin(f)*.5,o.ball(e,t+Math.sin(f)*.16*s,n+.87*s,a+Math.cos(f)*.15*s,.095*s,.06*s,.09*s,en([15247264,15318903,12954836],this.r),0)}}hideout(e,t,n=.9){this.w.hideouts.push({x:e,z:t});const a=this.s,s=a.cyl(this.root,e,.024,t,.5*n,.5*n,.04,5130550,12);s.scale.z*=.78,s.castShadow=!1;for(let o=0;o<8;o++){const r=Kt*o/8,f=(.12+this.r()*.14)*n,d=a.rock(this.root,e+.52*n*Math.cos(r),f*.34,t+.38*n*Math.sin(r),f*1.25,f*.66,f,en([8421218,9670258,10525305],this.r));d.rotation.y=r}}pumpkin(e,t,n){const a=this.s,s=en([[13074738,14456381,13535288],[13667380,15050053,14391355]],this.r);for(let o=0;o<8;o++){const r=o*Kt/8;a.ball(this.root,e+Math.sin(r)*n*.3,n*.64,t+Math.cos(r)*n*.3,n*.7,n*.63,n*.65,s[o%3],0)}a.rod(this.root,[e,n*1.2,t],[e+n*.16,n*1.54,t-n*.14],n*.11,7236932,n*.065,5),a.rock(this.root,e+n*.38,n*1.2,t+n*.03,n*.3,n*.05,n*.14,8554826)}cabbage(e,t,n,a){const s=this.s,o=[6717256,7703632,8558170,9742444,9413734];for(let r=0;r<7;r++){const f=r*Kt/7,d=a*(.32+this.r()*.14),l=s.rock(this.root,e+a*.48*Math.cos(f),t+d*.38,n+a*.48*Math.sin(f),d*1.38,d*.46,d,o[r%3]);l.rotation.y=f,l.rotation.z=Math.sin(f)*.34}s.rock(this.root,e,t+a*.4,n,a*.58,a*.54,a*.58,o[3])}veggieBed(e,t,n,a){const s=this.s;s.box(this.root,e,.17,t,n,.34,a,6442551),s.box(this.root,e,.36,t,n-.07,.08,a-.07,8152904);for(const r of[-1,1])s.box(this.root,e,.35,t+r*a*.5,n+.14,.17,.12,11174487),s.box(this.root,e,.17,t+r*a*.5,n+.14,.17,.11,10121292);for(const r of[-1,1]){s.box(this.root,e+r*n*.5,.35,t,.12,.17,a+.13,10977622),s.box(this.root,e+r*n*.5,.17,t,.12,.17,a+.12,9662027);for(const f of[-1,1])s.box(this.root,e+r*n*.48,.3,t+f*a*.46,.19,.6,.18,8741699)}const o=Math.floor(n/.65);for(let r=0;r<o;r++)for(const f of[-1,1])this.cabbage(e+(r-(o-1)/2)*.62,.4,t+f*a*.24,.25+this.r()*.08);this.w.block(e,t,n+.16,a+.16,0,.65,!1)}barrel(e,t,n=1){const a=this.s;a.cyl(this.root,e,n*.36,t,n*.4,n*.33,n*.7,9528902,10),a.cyl(this.root,e,n*.7,t,n*.37,n*.4,n*.23,10909519,10),a.cyl(this.root,e,n*.82,t,n*.355,n*.355,n*.04,11963226,10);for(const s of[.24,.59,.76]){const o=s===.59?.41:.375;a.cyl(this.root,e,n*s,t,n*o,n*o,n*.05,7037256,10)}this.w.block(e,t,n*.84,n*.84,0,n*.88,!1)}crate(e,t,n=.8,a=0){const s=this.s,o=s.group(this.root,e,0,t);o.rotation.y=a,s.box(o,0,n*.38,0,n*.92,n*.74,n*.92,7888188);for(let r=0;r<4;r++)for(const f of[-1,1])s.box(o,0,n*(.12+.19*r),f*n*.48,n,.16*n,.06*n,r%2?11306841:10649170),s.box(o,f*n*.48,n*(.12+.19*r),0,.06*n,.16*n,n,r%2?10846292:10254160);s.box(o,0,n*.76,0,n*.98,.06*n,n*.98,11766621),this.w.block(e,t,n*1.04,n*1.04,a,n*.82,!1)}stump(e,t,n=.9){const a=this.s;a.cyl(this.root,e,n*.24,t,n*.41,n*.53,n*.48,8610628,9),a.cyl(this.root,e,n*.49,t,n*.38,n*.41,n*.044,12231799,9),a.cyl(this.root,e,n*.515,t,n*.24,n*.24,n*.015,13085821,9);for(let s=0;s<4;s++){const o=s*Kt/4+.2;a.rod(this.root,[e+Math.cos(o)*n*.68,.04,t+Math.sin(o)*n*.68],[e,.26*n,t],n*.14,8742981,n*.06,5)}this.w.block(e,t,n*.95,n*.95,0,n*.54,!1)}mushroom(e,t,n=.14){const a=this.s;a.cyl(this.root,e,n*.6,t,n*.23,n*.27,n*1.2,14272928,6),a.ball(this.root,e,n*1.18,t,n,n*.56,n,en([12415829,13140314,11429708],this.r),0);for(let s=0;s<3;s++){const o=s*2.1+.3;a.ball(this.root,e+n*.45*Math.cos(o),n*1.45,t+n*.45*Math.sin(o),n*.12,n*.06,n*.12,15391414,0)}}cottage(e,t,n,a,s,o,r,f,d=!1,l=null){const c=this.s,g=d||!!l,h=c.group(this.root,e,0,t);h.rotation.y=n;const x=s/2,E=g?c.group(this.w.dynamic,e,0,t):h;g&&(E.rotation.y=n);const p=l?2.1:1.85,u=2.43;if(c.box(h,0,.105,0,a+.22,.21,s+.22,10263431),g){c.box(h,-a/2+.11,o/2,0,.22,o,s,f),c.box(h,a/2-.11,o/2,0,.22,o,s,f),c.box(h,0,o/2,-x+.1,a,o,.22,f);for(const B of[-1,1])c.box(h,B*(a+p)/4,o/2,x,(a-p)/2,o,.22,f);c.box(h,0,(o+u)/2,x,p,o-u,.22,f),c.box(h,0,.22,0,a-.25,.1,s-.23,l?13149307:12293224),this.localBlock(h,0,-x,a,.24,o),this.localBlock(h,-a/2,0,.22,s,o),this.localBlock(h,a/2,0,.22,s,o);for(const B of[-1,1])this.localBlock(h,B*(a+p)/4,x,(a-p)/2,.24,o)}else c.box(h,0,o/2+.1,0,a,o,s,f),this.localBlock(h,0,0,a,s,o+1.85);for(const B of[-1,1])c.box(h,B*a*.47,o/2,x+.08,.18,o,.19,We),c.box(h,B*a*.47,o/2,-x-.005,.18,o,.19,We),c.box(h,B*(a/2+.04),.46,0,.12,.21,s+.15,We),c.box(h,B*(a/2+.04),o-.12,0,.14,.18,s+.15,We);c.box(h,0,o-.05,x+.09,a+.05,.26,.2,Ct);for(const B of[-1,1])c.box(h,B*(a+p)/4,.46,x+.11,(a-p)/2,.21,.16,We);const R=a*.42,T=a/2+.48,b=R+.4,A=Math.atan2(b,T),C=Math.hypot(b,T);c.poly(E,[[-a/2,0],[a/2,0],[0,R]],s+.05,f).position.set(0,o,-x-.025);for(const B of[-1,1]){const N=c.box(E,B*T/2,o+(R-.4)/2,0,C+.16,.19,s+.94,6836036);N.rotation.z=-B*A;const j=5,te=Math.ceil(s/.84);for(let ne=0;ne<j;ne++){const ge=(ne+.44)/j,Re=B*T*(1-ge),W=o-.37+ge*b+.13;for(let J=0;J<te;J++){const ce=(J+.5)/te*(s+.94)-(s+.94)/2,ae=new Pe(r);ae.offsetHSL((this.r()-.5)*.012,0,(Math.floor(this.r()*4)-1.5)*.019);const Ee=c.box(E,Re,W,ce,C/j+.1,.14,(s+.94)/te-.022,ae.getHex());Ee.rotation.z=-B*A}}c.rod(E,[B*(a/2+.1),o,x+.15],[0,o+R+.08,x+.15],.11,Ct,.095,5)}c.box(E,0,o+R+.14,0,.31,.25,s+1,r),c.box(E,0,o+R/2,x+.09,.17,R,.17,We);const z=c.cyl(E,0,o+.52,x+.145,.425,.425,.13,We,14);z.rotation.x=Math.PI/2;const M=c.cyl(E,0,o+.52,x+.22,.31,.31,.06,16305534,14);M.rotation.x=Math.PI/2,c.box(E,0,o+.52,x+.269,.06,.64,.04,Ct),c.box(E,0,o+.52,x+.264,.64,.055,.04,Ct);const v=c.group(this.w.dynamic),w=this.marker(h,-p/2,0,x+.14);v.position.copy(w),v.rotation.y=n;const V=c.group(v),U=(l==null?void 0:l.doorColor)??(d?6788754:9201739);c.box(V,p/2,u/2,0,p-.04,u,.15,U);for(let B=0;B<6;B++)c.box(V,(B+.5)*p/6,u/2,.086,p/6-.025,u-.04,.045,U);c.box(V,p/2,.36,.123,p,.1,.08,Ct),c.box(V,p/2,u-.24,.125,p,.1,.08,Ct),c.ball(V,p-.25,1.05,.17,.075,.075,.06,13938024,1),c.bake(V);for(const B of[-1,1])c.box(h,B*(p/2+.05),u/2,x+.15,.14,u+.11,.19,Ct);c.box(h,0,u+.065,x+.15,p+.26,.16,.22,Ct),c.box(h,0,.09,x+.41,p+.55,.18,.7,12827809);for(const B of[-1,1]){const N=B*(a*.32),j=o*.53,te=Math.min(1.08,a*.2),ne=1.03;c.box(h,N,j,x+.13,te+.16,ne+.17,.14,Ct),c.box(h,N,j,x+.22,te,ne,.055,16174213),c.box(h,N,j,x+.27,.074,ne+.032,.06,We),c.box(h,N,j+.075,x+.265,te,.07,.07,We),c.box(h,N,j-ne/2-.11,x+.22,te+.29,.13,.37,We);for(const ge of[-1,1]){c.box(h,N+ge*(te/2+.18),j,x+.14,.23,ne+.04,.08,d?7705994:8558224);for(let Re=0;Re<3;Re++)c.box(h,N+ge*(te/2+.18),j+(Re-1)*.28,x+.19,.24,.048,.048,6388080)}c.box(h,N,j-.71,x+.28,te+.16,.27,.36,9858895);for(let ge=0;ge<5;ge++)c.rock(h,N+(ge-2)*.19,j-.5,x+.28,.17,.12,.13,en([7774302,9613936],this.r)),c.ball(h,N+(ge-2)*.18,j-.41,x+.3,.071,.054,.07,ge%2?15773825:15779746,0)}for(const B of[-1,1])for(const N of[-s*.22,s*.22])c.box(h,B*(a/2+.035),o*.54,N,.12,1.12,1.06,We),c.box(h,B*(a/2+.111),o*.54,N,.06,.93,.88,15844739),c.box(h,B*(a/2+.149),o*.54,N,.05,.96,.08,We),c.box(h,B*(a/2+.149),o*.54,N,.05,.07,.91,We);const O=o+R+.8,q=a*.25,H=-s*.19;c.box(E,q,O-.86,H,.65,1.72,.67,10849404);for(let B=0;B<5;B++)c.box(E,q,O-1.45+B*.3,H,.675,.055,.69,9403762);if(c.box(E,q,O,H,.82,.21,.83,12362122),c.box(E,q,O+.115,H,.51,.02,.53,6118745),this.pot(h,-a*.48,0,x+.9,.9),this.pot(h,a*.48,0,x+.83,.65),d){this.w.homeRoof=E,this.w.homeFrame=h,c.bake(E),this.w.interiors.push({id:"home",frame:h,roof:E,hw:a/2,hd:s/2,front:x});const B=this.marker(h,0,1,x+.23),N=this.localBlock(h,0,x+.14,p,.18,u),j={id:"home",targetId:"door",hinge:V,b:N,angle:0,open:!1,frame:h,w:p,d:x+.14,openLabel:"Tutup pintu rumah",closedLabel:"Buka pintu rumah"};this.w.door=j,this.w.doors.home=j,this.w.target("door","Buka pintu rumah",B.x,B.y,B.z,2.65,N);const te=this.marker(h,0,u+.38,x+.2),ne=this.s.signText(this.w.labels,"RUMAH OYEN",te.x,te.y,te.z,1.95,.4);ne.rotation.y=n;const ge=c.group(h,-1.91,0,x+1.16);c.cyl(ge,0,.18,0,1,.94,.32,10977369,12).scale.z=.71,c.ball(ge,0,.34,.01,.92,.21,.65,9088664,1),c.ball(ge,-.5,.46,-.19,.29,.14,.29,15193254,1);for(let ce=0;ce<4;ce++)c.box(ge,-.1+ce*.18,.495,.08,.054,.015,.7,12374192);const Re=this.marker(h,-1.91,.46,x+1.17);this.w.bed=Re,this.localBlock(h,-1.91,x+1.17,1.58,1.04,.445,!1),this.w.target("bed","Tidur & pulihkan diri",Re.x,.5,Re.z,2.45);const W=c.group(h,1.9,0,x+1.2);c.cyl(W,0,.16,0,.43,.54,.32,7052448,14),c.cyl(W,0,.33,0,.445,.445,.065,12046532,14),c.cyl(W,0,.37,0,.345,.345,.02,8412485,12);for(let ce=0;ce<8;ce++)c.rock(W,(this.r()-.5)*.45,.38+this.r()*.04,(this.r()-.5)*.4,.085,.06,.07,12094811);const J=this.marker(h,1.9,.4,x+1.2);this.localBlock(h,1.9,x+1.2,.68,.68,.35,!1),this.w.target("bowl","Makan dari mangkuk",J.x,J.y,J.z,2.15),c.box(h,0,.29,-.5,2.9,.04,1.8,8301217),c.box(h,0,.315,-.5,2.58,.021,1.49,13092259),c.box(h,-1.8,.61,-1.5,.9,.13,1.2,We);for(const ce of[-.3,.3])c.cyl(h,-1.8+ce,.33,-1.5,.07,.07,.57,We);this.pot(h,1.76,.24,-1.44,.8)}else if(l){c.bake(E),this.w.interiors.push({id:l.id,frame:h,roof:E,hw:a/2,hd:s/2,front:x});const B=this.marker(h,0,1,x+.23),N=this.localBlock(h,0,x+.14,p,.18,u),j=`door_${l.id}`,te={id:l.id,targetId:j,hinge:V,b:N,angle:0,open:!0,frame:h,w:p,d:x+.14,openLabel:`Tutup pintu ${l.shortName}`,closedLabel:`Buka pintu ${l.shortName}`};this.w.doors[l.id]=te,this.w.target(j,te.openLabel,B.x,B.y,B.z,2.35,N);const ne=this.marker(h,0,u+.42,x+.22),ge=this.s.signText(this.w.labels,l.title,ne.x,ne.y,ne.z,2.9,.48,"#fff5dc",l.signBg||"#6e4b5b");if(ge.rotation.y=n,c.box(h,0,.29,.1,a*.56,.03,s*.46,l.rugColor||13076888),c.box(h,0,.31,.1,a*.48,.02,s*.38,l.rugInner||15653306),l.style==="boutique"){for(const W of[-.95,.55])c.cyl(h,-2.25,.98,W,.055,.065,1.45,We,6);c.rod(h,[-2.25,1.62,-1.05],[-2.25,1.62,.65],.045,12095330),[13192288,15116858,9335480,4103834,15109288].forEach((W,J)=>{c.box(h,-2.25,1.18,-.75+J*.32,.14,.78,.22,W)}),this.localBlock(h,-2.25,-.2,.55,1.9,1.6,!1),c.box(h,2.15,.76,-.2,.85,.98,1.9,11042134),c.box(h,2.15,1.28,-.2,.94,.08,2.02,13213554),c.cyl(h,2.15,1.38,-.82,.32,.34,.06,14860410,10),c.cyl(h,2.15,1.5,-.82,.16,.2,.16,15388812,10),c.ball(h,2.15,1.44,-.18,.26,.11,.24,12078179,1),c.cyl(h,2.15,1.43,.45,.18,.16,.15,15973963,8),this.localBlock(h,2.15,-.2,.96,2.02,1.45,!1),c.box(h,-1.5,1.35,-x+.32,.92,1.65,.12,9069640),c.box(h,-1.5,1.35,-x+.39,.74,1.45,.04,12375260),this.pot(h,1.95,.26,-x+.65,.72)}else if(l.style==="salon"){c.cyl(h,-1.9,.62,-.75,.84,.76,.74,10187598,14),c.cyl(h,-1.9,.97,-.75,.75,.75,.06,8833487,14);for(let Re=0;Re<6;Re++){const W=Re*1.05;c.ball(h,-1.9+Math.cos(W)*.36,1.04+Re%2*.05,-.75+Math.sin(W)*.32,.13,.11,.13,15988730,1)}this.localBlock(h,-1.9,-.75,1.65,1.65,1.05,!1),c.box(h,1.95,.7,-.55,.95,.86,1.75,12097144),c.ball(h,1.95,1.2,-.92,.42,.14,.42,10257087,1);for(const[Re,W]of[[-.1,14258086],[.14,9356745],[.36,15254650]])c.cyl(h,1.95,1.26,Re,.08,.1,.26,W,8),c.ball(h,1.95,1.43,Re,.06,.06,.06,16180932,0);this.localBlock(h,1.95,-.55,1.02,1.82,1.35,!1),this.pot(h,0,.26,-x+.55,.78)}}}lamp(e,t,n=0,a=!1){const s=this.s,o=s.group(this.root,e,0,t);o.rotation.y=n,s.cyl(o,0,.16,0,.26,.34,.32,9803913,6),s.cyl(o,0,1.45,0,.115,.14,2.7,8087120,7),s.rod(o,[0,2.45,0],[.66,3.03,0],.08,We,.08),s.box(o,.38,3.04,0,1.04,.17,.16,We),s.rod(o,[.73,3.05,0],[.73,2.75,0],.028,5133910),s.cyl(o,.73,2.7,0,.05,.29,.225,5399144,4).rotation.y=Math.PI/4,s.box(o,.73,2.26,0,.41,.13,.4,5792614);const r=this.marker(o,.73,2.48,0),f=s.box(this.w.dynamic,r.x,r.y,r.z,.31,.4,.305,a?16766860:16177567);f.rotation.y=n;for(const d of[-.16,.16])for(const l of[-.16,.16])s.rod(o,[.73+d,2.26,l],[.73+d,2.69,l],.021,5792102,.021,4);this.w.block(e,t,.25,.25,n,2.9,!1),a&&(this.w.lantern=f,this.w.target("lamp","Matikan lentera",e,.74,t,2.2))}market(){const e=this.s,t=e.group(this.root,10,0,-8.6);t.rotation.y=-.38;const n=5.4,a=3.4;for(const l of[-n/2,n/2])for(const c of[-a/2,a/2])e.cyl(t,l,1.64,c,.087,.125,3.28,We,7),this.localBlock(t,l,c,.2,.2,3,!1);e.box(t,0,2.96,-a/2,n+.4,.16,.18,We);const s=9;for(let l=0;l<s;l++){const c=(l+.5)*(n+.7)/s-(n+.7)/2,g=l%2?15326127:7250841,h=e.box(t,c,3.22,0,(n+.7)/s+.012,.105,a+.85,g);h.rotation.x=.105,e.box(t,c,2.9,a/2+.43,(n+.7)/s,.32,.09,g);const x=e.cyl(t,c,2.75,a/2+.434,.335,.335,.085,g,10);x.rotation.x=Math.PI/2,x.scale.z*=.42}e.box(t,0,.63,.48,n-.22,1.22,1.43,11700832);for(let l=0;l<11;l++)e.box(t,(l-5)*.47,.65,1.223,.426,1.14,.04,l%2?12096617:11635296);e.box(t,0,1.29,.48,n+.06,.16,1.65,13280632),e.box(t,0,.22,1.255,n-.11,.16,.1,We),this.localBlock(t,0,.48,n-.18,1.58,1.41);for(let l=0;l<3;l++){const c=(l-1)*1.44;e.box(t,c,1.41,.57,1.27,.12,.91,9336412);for(const g of[-1,1])e.box(t,c,1.52,.57+g*.46,1.36,.2,.065,13676938),e.box(t,c+g*.64,1.5,.57,.065,.2,.91,13215100);for(let g=0;g<3;g++){const h=e.group(t,c+(g-1)*.33,1.535,.57);h.rotation.y=.22+g*.15,e.ball(h,0,0,0,.122,.103,.31,l===2?14264464:10535359,0);const x=e.cyl(h,0,.01,-.31,.155,.055,.2,8759975,3);x.rotation.x=Math.PI/2,e.ball(h,.103,.035,.14,.023,.027,.024,3951947,0)}}for(const[l,c,g]of[[-3.4,.8,.9],[-3.25,-.44,.65],[3.36,-.7,.95]]){e.cyl(t,l,.38*g,c,.55*g,.43*g,.76*g,11174487,12);for(let h=0;h<4;h++)e.cyl(t,l,(.13+h*.18)*g,c,(.46+h*.026)*g,(.46+h*.026)*g,.054*g,12755312,12);e.cyl(t,l,.769*g,c,.48*g,.48*g,.014*g,6904905,12),this.localBlock(t,l,c,.83*g,.83*g,.76*g,!1)}const o=this.marker(t,0,2.86,a/2+.53),r=e.signText(this.w.labels,"PASAR IKAN",o.x,o.y,o.z,2.6,.51,"#fff1ce","#416c68");r.rotation.y=t.rotation.y;const f=this.marker(t,-4.2,3.65,2.4),d=this.marker(t,4.3,3.65,2.4);this.bunting(f,d,t.rotation.y)}bunting(e,t,n=0){const a=this.s;a.rod(this.root,[e.x,0,e.z],[e.x,e.y+.1,e.z],.077,We),a.rod(this.root,[t.x,0,t.z],[t.x,t.y+.1,t.z],.077,We);for(let s=0;s<9;s++){const o=s/9,r=(s+1)/9,f=h=>[e.x+(t.x-e.x)*h,e.y-Math.sin(h*Math.PI)*.62,e.z+(t.z-e.z)*h];a.rod(this.root,f(o),f(r),.018,7891021,.018,4);const[d,l,c]=f(o+.045),g=a.poly(this.root,[[-.25,0],[.25,0],[0,-.54]],.025,[12156264,14861707,8105379,9018289][s%4]);g.position.set(d,l,c),g.rotation.y=n}}garden(){const e=this.s;this.patch(-14,-11,6,4.65,9876857),this.tree(-16.3,-12.8,1.45,"fruit"),this.fence([-20.3,-15.8],[-8.4,-15.8]),this.fence([-20.3,-15.8],[-20.3,-13.8]),this.fence([-20.3,-10],[-20.3,-7.3]),this.fence([-19.6,-5.8],[-16.8,-5.8]);for(const[s,o,r]of[[-17.6,-9.1,15184849],[-13,-13.4,16047256],[-10.6,-10.4,13021913]]){this.patch(s,o,1.5,.94,10196080,.025);for(let f=0;f<19;f++){const d=this.r()*6.28,l=this.r();this.flower(this.root,s+Math.sin(d)*l*1.38,o+Math.cos(d)*l*.85,f%4===0?16181962:r,.75+this.r()*.65)}}const t=e.group(this.root,-17.5,0,-6.85);t.rotation.y=.56;for(const s of[-1,1])e.box(t,s,.34,0,.18,.68,.54,We),e.rod(t,[s,.4,-.2],[s,1.3,-.37],.062,We);for(let s=0;s<3;s++)e.box(t,0,.66,(s-1)*.19,2.46,.12,.17,12623216);e.box(t,0,1.05,-.32,2.49,.29,.1,12097384),this.localBlock(t,0,0,2.48,.7,1.26);const n=e.group(this.w.dynamic,-11.8,.34,-8.8);e.ball(n,0,0,0,.36,.34,.35,13207953,1);for(let s=0;s<7;s++){const o=new Je(e.geo("yarnband",()=>new On(.34,.013,4,20)),e.mat(s%2?14986163:11892355));o.rotation.set(.5*s,.4+s*.2,.16*s),n.add(o)}e.bake(n),this.w.yarn=n,this.w.target("yarn","Main bola benang",-11.8,.42,-8.8,2.4);let a=[-11.8,.04,-8.65];for(let s=0;s<5;s++){const o=[-11.8+Math.sin(s*.9)*.48,.04,-8.65+s*.2];e.rod(this.root,a,o,.018,12947350,.018,4),a=o}this.sign(-8.75,-5.7,"TAMAN BUNGA",.32,2.2)}sign(e,t,n,a=0,s=2.05){const o=this.s,r=o.group(this.root,e,0,t);r.rotation.y=a,o.cyl(r,0,.68,0,.105,.125,1.36,8546637,6),o.box(r,0,1.27,0,s,.45,.14,9400657),o.box(r,0,1.51,0,s+.07,.085,.21,10453083);const f=this.marker(r,0,1.275,.079),d=o.signText(this.w.labels,n,f.x,f.y,f.z,s*.96,.36,"#f8e6bc","#8f7151");d.rotation.y=a,this.w.block(e,t,.2,.2,a,1.4,!1)}bench(e,t,n=0){const a=this.s,s=a.group(this.root,e,0,t);s.rotation.y=n;for(const o of[-.95,.95])a.box(s,o,.34,0,.16,.68,.52,We),a.rod(s,[o,.4,-.2],[o,1.25,-.35],.058,We);for(let o=0;o<3;o++)a.box(s,0,.66,(o-1)*.18,2.34,.11,.16,12623216);a.box(s,0,1.04,-.31,2.36,.27,.09,12097384),this.localBlock(s,0,0,2.38,.68,1.18,!1)}cushion(e,t,n=14261388,a=1){const s=this.s;s.cyl(this.root,e,.11*a,t,.85*a,.92*a,.2*a,11043419,14),s.ball(this.root,e,.22*a,t,.8*a,.18*a,.8*a,n,1),s.ball(this.root,e,.33*a,t,.12*a,.06*a,.12*a,15983810,0)}catTree(e,t,n=1){const a=this.s,s=a.group(this.root,e,0,t);s.scale.setScalar(n),a.box(s,0,.12,0,1.9,.24,1.9,11832416),a.cyl(s,-.45,.95,.2,.16,.17,1.65,14205849,10),a.cyl(s,.45,1.35,-.25,.16,.17,2.45,14205849,10),a.box(s,-.42,1.78,.2,1.05,.14,1,13213554),a.ball(s,-.42,1.9,.2,.44,.09,.42,9021593,1),a.box(s,.42,.62,.35,.92,.78,.88,10450513),a.cyl(s,.42,.56,.8,.25,.25,.05,4930349,10).rotation.x=Math.PI/2,a.cyl(s,.45,2.6,-.25,.62,.58,.18,13213554,12),a.ball(s,.45,2.74,-.25,.54,.1,.54,14261128,1),a.rod(s,[.95,2.55,-.25],[.95,1.98,-.25],.015,11969404,.015,4),a.ball(s,.95,1.88,-.25,.13,.13,.13,15250781,1),this.w.block(e,t,1.85*n,1.85*n,0,2.8*n,!0)}cafeTable(e,t,n=0){const a=this.s,s=a.group(this.root,e,0,t);s.rotation.y=n,a.cyl(s,0,.32,0,.11,.16,.64,9201736,8),a.cyl(s,0,.68,0,.82,.78,.1,13214580,12),a.cyl(s,-.24,.82,.12,.11,.095,.18,16051936,8),a.cyl(s,-.24,.915,.12,.088,.088,.02,16775920,8),a.cyl(s,.22,.76,-.1,.21,.18,.04,9548971,10),a.ball(s,.22,.8,-.1,.11,.045,.08,14262365,0),this.w.block(e,t,1.55,1.55,0,.78,!1),this.cushion(e-1.25,t+.1,14197372,.74),this.cushion(e+1.25,t-.1,9154212,.74)}bridge(e,t,n=0){const a=this.s,s=a.group(this.root,e,0,t);s.rotation.y=n;for(let o=0;o<13;o++){const r=o/12,f=.12+Math.sin(r*Math.PI)*.35;a.box(s,0,f,-1.8+r*3.6,2.1,.18,.275,11835246)}for(const o of[-1,1]){for(let r=0;r<3;r++)a.box(s,o*.99,.6+Math.sin(r*Math.PI/2)*.3,(r-1)*1.65,.14,1,.15,10058582);a.rod(s,[o*.99,1.08,-1.65],[o*.99,1.37,0],.087,11307616),a.rod(s,[o*.99,1.37,0],[o*.99,1.08,1.65],.087,11307616)}this.w.bridges.push({x:e,z:t,angle:n})}toyShop(e,t,n=0){const a=this.s,s=a.group(this.root,e,0,t);s.rotation.y=n;const o=5.8,r=3.5;for(const h of[-o/2,o/2])for(const x of[-r/2,r/2])a.cyl(s,h,1.66,x,.09,.125,3.32,We,7),this.localBlock(s,h,x,.22,.22,3.1,!1);a.box(s,0,2.98,-r/2,o+.4,.16,.18,We);const f=9;for(let h=0;h<f;h++){const x=(h+.5)*(o+.7)/f-(o+.7)/2,E=h%2?15916714:6262696,p=a.box(s,x,3.24,0,(o+.7)/f+.012,.105,r+.85,E);p.rotation.x=.1,a.box(s,x,2.92,r/2+.43,(o+.7)/f,.32,.09,E);const u=a.cyl(s,x,2.77,r/2+.434,.34,.34,.085,E,10);u.rotation.x=Math.PI/2,u.scale.z*=.42}a.box(s,0,.63,.46,o-.2,1.22,1.44,11042133),a.box(s,0,1.29,.46,o+.08,.16,1.66,13411442),this.localBlock(s,0,.46,o-.16,1.6,1.41);const d=[[-1.7,1.54,.52,14186630],[-1.3,1.54,.36,8172968],[-1.5,1.85,.45,15252578]];for(const[h,x,E,p]of d)a.ball(s,h,x,E,.24,.23,.24,p,1);const l=a.box(s,0,1.58,.48,1.15,.42,.65,14271123);l.rotation.x=.28;for(let h=0;h<3;h++)a.ball(s,1.25+h*.42,1.54,.52,.16,.17,.16,15909467,1);for(const h of[-1,1]){const x=h*3.45;a.box(s,x,.1,.4,.88,.2,.88,10187855),a.cyl(s,x,.72,.4,.15,.16,1.15,14271384,10),a.ball(s,x,1.38,.4,.22,.16,.22,h<0?14254954:7250841,1),this.localBlock(s,x,.4,.9,.9,1.45,!1)}const c=this.marker(s,0,2.88,r/2+.53),g=a.signText(this.w.labels,"CAKAR CERIA",c.x,c.y,c.z,2.7,.51,"#fff4d4","#3d647c");g.rotation.y=n}catCafe(e,t,n=Math.PI){const a=this.s,s=a.group(this.root,e,0,t);s.rotation.y=n;const o=6.6,r=3.7;for(const c of[-o/2,o/2])for(const g of[-r/2,r/2])a.cyl(s,c,1.68,g,.095,.13,3.36,We,7),this.localBlock(s,c,g,.24,.24,3.2,!1);a.box(s,0,3,-r/2,o+.4,.16,.18,We);const f=10;for(let c=0;c<f;c++){const g=(c+.5)*(o+.8)/f-(o+.8)/2,h=c%2?16180931:13072216,x=a.box(s,g,3.26,0,(o+.8)/f+.012,.105,r+.9,h);x.rotation.x=.1,a.box(s,g,2.94,r/2+.45,(o+.8)/f,.32,.09,h);const E=a.cyl(s,g,2.78,r/2+.454,.34,.34,.085,h,10);E.rotation.x=Math.PI/2,E.scale.z*=.42}a.box(s,0,.64,.48,o-.2,1.24,1.48,10252880),a.box(s,0,1.3,.48,o+.1,.16,1.7,14201988),this.localBlock(s,0,.48,o-.16,1.65,1.42);for(const c of[-2.1,-1.6])a.cyl(s,c,1.62,.48,.14,.2,.48,16315366,10),a.cyl(s,c,1.88,.48,.16,.14,.08,15260088,10);for(const c of[-.6,-.1,.4])a.cyl(s,c,1.5,.65,.12,.1,.2,16051936,8),a.cyl(s,c,1.61,.65,.095,.095,.02,16775922,8);for(const c of[1.45,2.05])a.cyl(s,c,1.52,.45,.2,.15,.28,12088658,8),a.rock(s,c,1.76,.45,.22,.2,.22,7252066,1),a.rock(s,c+.08,1.86,.4,.14,.14,.14,9226100,0);this.pot(s,-o/2-.55,0,1,.88),this.pot(s,o/2+.55,0,1,.88);const d=this.marker(s,0,2.9,r/2+.56),l=a.signText(this.w.labels,"KEDAI SUSU & CATNIP",d.x,d.y,d.z,3.3,.52,"#fff4d8","#8c4e38");l.rotation.y=n}marketStreet(){this.s;for(const[e,t,n,a]of[[-8,-29.2,7.2,4.2],[5.5,-29.2,8.2,4.4],[18.5,-29.2,7.2,4.2]])this.patch(e,t,n,a,13088658,.036),this.patch(e,t,n-.4,a-.35,14141089,.047);for(let e=0;e<42;e++){const t=-13+e/41*35,n=-29.2+(this.r()-.5)*4.4,a=this.stone(this.root,t,.064,n,.22+this.r()*.26,.03,.16+this.r()*.12,[13285525,14667950,12892055][e%3]);a.castShadow=!1}this.cottage(-8.5,-35.8,0,6.4,5,3.4,12086653,15916994,!1,{id:"boutique",shortName:"Butik",title:"BUTIK BENANG & PITA",doorColor:12150906,signBg:"#7d4557",rugColor:13930144,rugInner:16048063,style:"boutique"}),this.toyShop(5.5,-35.5,0),this.cottage(19.5,-35.2,-.22,6.2,4.8,3.3,8097448,15590866,!1,{id:"salon",shortName:"Salon",title:"SALON BULU HALUS",doorColor:8031400,signBg:"#4e5c78",rugColor:10193080,rugInner:15721419,style:"salon"}),this.lamp(-14.2,-26.5,.3),this.lamp(-1.6,-32.2,.1),this.lamp(12.2,-32.2,3),this.lamp(24.5,-27.5,-2.5),this.bunting(new be(-4.2,3.8,-26.2),new be(4.2,3.8,-26.2),0),this.bunting(new be(8.5,3.8,-26.2),new be(16.8,3.8,-26.2),0),this.bench(-13.8,-31,1.35),this.bench(12.4,-25.4,Math.PI),this.sign(-3.8,-24.4,"JALAN NIAGA KUCING",.18,2.75),this.tree(-16.5,-37.2,1.12,"pink"),this.tree(-1.5,-40.2,1.05,"gold"),this.tree(12.5,-40,1.08,"pink"),this.tree(26.8,-37.5,1.15,"oak");for(const[e,t]of[[-13.5,-34.2],[12.4,-34.8],[25.2,-33.6]])for(let n=0;n<7;n++)this.flower(this.root,e+(this.r()-.5)*1.8,t+(this.r()-.5)*1.6,[15909067,16245152,13284572][n%3],.9+this.r()*.4)}catCafeZone(){const e=this.s;this.patch(0,31.2,12.2,8.8,12371094,.022),this.patch(0,31.2,10.6,7.2,14207138,.036);for(let n=0;n<36;n++){const a=n*2.4,s=Math.sqrt((n+.5)/36)*8.2,o=this.stone(this.root,Math.cos(a)*s,.052,31.2+Math.sin(a)*s*.72,.24+this.r()*.25,.028,.16+this.r()*.12,[13285782,14799278,13023384][n%3]);o.castShadow=!1}this.catCafe(-1.5,36.8,Math.PI),this.catTree(-10.2,29.8,1.05),this.catTree(9.2,31.4,1.08),this.cafeTable(-4.8,29.5,.2),this.cafeTable(4.6,29.5,-.25),this.cushion(-7.2,31.8,14854285,1.18);const t=e.group(this.w.dynamic,7.2,.34,28.4);e.ball(t,0,0,0,.36,.34,.35,8172454,1);for(let n=0;n<7;n++){const a=new Je(e.geo("yarnband",()=>new On(.34,.013,4,20)),e.mat(n%2?10736839:6132872));a.rotation.set(.5*n,.4+n*.2,.16*n),t.add(a)}e.bake(t),this.w.cafeYarn=t,this.w.target("yarn_cafe","Main bola benang kafe",7.2,.42,28.4,2.4),this.lamp(-4.5,24.5,.4),this.lamp(4.8,24.5,2.7),this.lamp(-11.2,35.8,.6),this.lamp(9.6,36.5,-2.6),this.bench(-11.8,26.2,.72),this.bench(11.4,26.5,-.78),this.sign(-3,24,"TAMAN & CAT CAFE",.08,2.6),this.tree(-14.8,33.5,1.15,"pink"),this.tree(-9.5,40.5,1.12,"fruit"),this.tree(6.5,40.8,1.15,"gold"),this.tree(14.5,34.5,1.12,"oak");for(const[n,a]of[[-12.2,31.8],[11.8,29.2],[-5.6,39.2],[4.2,39.2]])for(let s=0;s<8;s++)this.flower(this.root,n+(this.r()-.5)*2,a+(this.r()-.5)*1.6,[16310173,15247541,15918274][s%3],.85+this.r()*.45)}westWoodsZone(){this.patch(-31.5,-10.5,11.5,10.5,9021550,.015),this.cottage(-38.5,-24.5,.52,5.4,4.6,3.25,10183754,14599319),this.sign(-21.8,-11,"LADANG BARAT",1.25,2.25),this.veggieBed(-29.5,-18.5,3.4,1.65),this.veggieBed(-35.2,-16.2,3.2,1.65),this.veggieBed(-28.4,-3.6,3.2,1.65);for(const[e,t,n]of[[-27.4,-15.8,.4],[-26.7,-16.3,.28],[-32.8,-18.2,.36],[-33.4,-17.7,.25],[-26.2,-2.5,.38],[-25.6,-3,.24],[-35.5,1.2,.35]])this.pumpkin(e,t,n);this.barrel(-34.6,-21.2,1.05),this.crate(-33.5,-21.8,.78,.32),this.barrel(-25.8,-6.4,.95),this.stump(-37.2,-9.8,.92),this.stump(-31.8,7.6,.86),this.stump(-37.8,4.2,.95);for(const[e,t,n]of[[-36.5,-9.4,.14],[-36.9,-9.1,.11],[-32.4,7.2,.15],[-32,7.9,.1],[-38.2,4.8,.14],[-28.5,13.8,.13]])this.mushroom(e,t,n);for(const[e,t,n]of[[-31.5,-14,.92],[-36.5,-4.5,.9],[-30.5,3.5,.88],[-25.2,-19.5,.88],[-29.8,14,.88]])this.hideout(e,t,n);this.fence([-39.5,-19.5],[-33,-22.5]),this.fence([-25,-21.2],[-18.5,-19.8]),this.lamp(-25.2,-11.6,1.1),this.lamp(-32.2,.8,.8),this.lamp(-24.8,12.6,.3);for(const[e,t,n,a]of[[-39.8,-11.5,1.28,"pine"],[-40.5,-2.5,1.22,"pine"],[-39.2,7.8,1.18,"gold"],[-37.5,16.5,1.24,"pine"],[-29.5,-25.8,1.2,"pine"],[-34,-32.2,1.15,"pine"],[-24.2,-26.5,1.05,"gold"],[-24,19.5,1.1,"oak"],[-31.8,20.8,1.18,"pine"],[-26.5,-2,.95,"fruit"]])this.tree(e,t,n,a)}eastRiverZone(){const e=this.s;this.bridge(33.8,10.4,.08);for(let t=0;t<6;t++)e.box(this.root,29.8,.18,12.05+t*.28,1.55,.16,.26,t%2?11637867:12296314);for(const t of[29.1,30.5])for(const n of[12.1,13.4])e.cyl(this.root,t,.25,n,.085,.11,.62,9599320,7);e.rod(this.root,[30.52,.42,12.18],[30.2,2.08,10.95],.042,11963225,.015,6),e.rod(this.root,[30.2,2.08,10.95],[30.15,.16,10.75],.007,13950928,.007,4),this.w.riverBobber=e.ball(this.w.dynamic,30.15,.18,10.75,.07,.09,.07,12877153,0),this.w.target("river_pond","Memancing di tepi sungai",29.8,.72,12.75,2.75),this.sign(25.8,13.4,"TEPI SUNGAI",-.42,2.15),this.cottage(36.5,-4.8,-1.35,5.2,4.4,3.2,8229533,15260084),this.cottage(35.2,-18.8,-.85,5,4.3,3.15,9084029,15456174),this.cottage(37.5,22.5,-2.15,4.9,4.2,3.05,11828060,15191971),this.bench(28.5,5.4,.18),this.bench(27.8,18.8,-2.65),this.barrel(31.2,-14.8,1),this.crate(32,-14,.72,.45),this.stump(27.2,-5.2,.85),this.lamp(25.2,7.2,2.6),this.lamp(31.5,-1.2,-1.5),this.lamp(30.8,17.5,-.5),this.lamp(29.8,-19.5,-2.1);for(const[t,n,a]of[[28.5,-10.5,.88],[32.2,1.8,.86],[29.8,22,.88]])this.hideout(t,n,a);for(const[t,n,a,s]of[[39.8,3.5,1.12,"oak"],[40.6,15.8,1.18,"fruit"],[40.2,-12.5,1.2,"pine"],[33.5,-27,1.15,"pink"],[31.5,28.2,1.14,"gold"],[24.5,29.8,1.1,"oak"],[39.5,-26.5,1.22,"pine"]])this.tree(t,n,a,s);for(const[t,n]of[[25.6,16.5],[36.2,6.2],[31,-9.5]])for(let a=0;a<7;a++)this.flower(this.root,t+(this.r()-.5)*1.9,n+(this.r()-.5)*1.7,[15981204,14201556,16773316][a%3],.8+this.r()*.45)}}class _s{constructor(e,t,{fur:n=15177538,dark:a=12215598,cream:s=16768942,scarf:o=4103834,pattern:r="tabby",patch2:f=4933199,hat:d="none"}={}){this.s=e,this.pattern=r,this.scarfColor=o,this.hatType=d,this.root=e.group(t),this.rig=e.group(this.root),this.body=e.group(this.rig,0,.62,-.08);const l=r==="siamese"?n:s,c=r==="siamese"?a:s,g=r==="siamese"?a:n;e.ball(this.body,0,0,0,.48,.52,.67,n,2),e.ball(this.body,0,-.055,.37,.36,.42,.34,l,1);const h=e.ball(this.body,0,-.02,-.33,.46,.49,.39,n);h.rotation.x=-.15,this.legs=[],this.claws=[null,null,null,null];const x=e.geo("cat-claw",()=>new $o(1,1,5));let E=0;for(const U of[-.42,.3])for(const O of[-.28,.28]){const q=e.group(this.rig,O,.45,U);if(e.ball(q,0,-.13,0,.151,.252,.17,n),e.ball(q,0,-.318,.052,.158,.126,.205,c),e.ball(q,-.047,-.32,.227,.013,.043,.013,14659448,0),e.ball(q,.043,-.32,.225,.013,.038,.013,14659448,0),U>0){const H=e.group(q,0,-.315,.23);for(let B=0;B<3;B++){const N=e.mesh(H,x,16247760,(B-1)*.052,-.01,.05,.024,.135,.024);N.rotation.x=Math.PI/2+.16,N.castShadow=!1}H.visible=!1,this.claws[E]=H}this.legs.push(q),E++}if(this.head=e.group(this.rig,0,1.28,.35),e.ball(this.head,0,0,0,.626,.563,.527,n,2),e.ball(this.head,0,-.226,.12,.54,.315,.41,n,2),r==="tabby")for(const U of[-1,0,1]){const O=[],q=[],H=[];for(let N=0;N<=12;N++){const j=N/12,te=.005+.056*j;for(const ne of[-1,1]){const ge=U*(.15+.045*j)+ne*te,Re=(U===0?.252:.293)+j*(U===0?.299:.21),W=.527*Math.sqrt(Math.max(.009,1-(ge/.626)**2-(Re/.563)**2))+.011;O.push(ge,Re,W);const J=new be(ge/.626**2,Re/.563**2,W/.527**2).normalize();H.push(J.x,J.y,J.z)}if(N){const ne=N*2;q.push(ne-2,ne-1,ne,ne-1,ne+1,ne)}}const B=new yt;B.setAttribute("position",new At(O,3)),B.setAttribute("normal",new At(H,3)),B.setIndex(q),e.mesh(this.head,e.own(B),a)}else r==="siamese"?e.ball(this.head,0,-.06,.34,.37,.25,.23,a,1):r==="calico"?(e.ball(this.head,.29,.22,.21,.3,.26,.26,a,1),e.ball(this.head,-.31,.14,.18,.27,.24,.24,f,1),e.ball(this.body,-.26,.22,.08,.31,.28,.34,a,1),e.ball(this.body,.24,.16,-.26,.28,.26,.31,f,1)):r==="tuxedo"&&e.ball(this.head,0,-.21,.31,.34,.21,.25,s,1);this.ears=[];for(const U of[-1,1]){const O=e.group(this.head,U*.36,.31,-.03);O.rotation.z=-U*.1;const q=[[-.22,0],[-.205,.22],[-.115,.54],[-.067,.565],[.17,.16],[.22,0]].map(([j,te])=>[j*U,te]),H=r==="calico"?U<0?f:a:g,B=e.poly(O,q,.18,H);B.position.z=-.12;const N=e.poly(O,[[-.15*U,.115],[-.092*U,.436],[.095*U,.15]],.015,15244163);N.position.z=.075,this.ears.push(O)}const p=r==="siamese"?a:s;this.eyes=[];for(const U of[-1,1]){const O=e.group(this.head,U*.258,.065,.45);O.rotation.y=U*.25,e.ball(O,0,0,0,.133,.161,.067,4929067,2),e.ball(O,0,.001,.046,.112,.141,.044,2432805,2),e.ball(O,-.032,.055,.088,.041,.048,.014,16774360,1),e.ball(O,.034,-.049,.084,.016,.017,.009,16107410,1),this.eyes.push(O),e.ball(this.head,U*.125,-.144,.455,.183,.145,.116,p,2),e.ball(this.head,U*.36,-.115,.375,.073,.028,.018,16104077,1);for(let q=0;q<2;q++)e.rod(this.head,[U*.24,-.167-q*.05,.493],[U*.64,-.14-q*.12,.52],.009,9266504,.004,4)}e.poly(this.head,[[-.072,.03],[.072,.03],[.029,-.028],[0,-.047],[-.03,-.026]],.04,9920079).position.set(0,-.108,.555),e.rod(this.head,[0,-.155,.567],[0,-.18,.575],.008,9528397);for(const U of[-1,1])e.rod(this.head,[0,-.18,.575],[.045*U,-.199,.566],.009,9528397);this.scarfGroup=e.group(this.rig),this.buildScarf(o),this.hatGroup=e.group(this.head),this.buildHat(d);const R=(U,O,q,H=16)=>{const B=[],N=[];for(let te=0;te<=H;te++)for(const ne of[-1,1])B.push(...O(te/H,ne));for(let te=0;te<H;te++){const ne=te*2;N.push(ne,ne+2,ne+1,ne+1,ne+2,ne+3)}const j=new yt;j.setAttribute("position",new At(B,3)),j.setIndex(N),j.computeVertexNormals(),e.mesh(U,e.own(j),q)};if(r==="tabby"){for(const U of[-1,1])for(let O=0;O<2;O++)R(this.head,(q,H)=>{const B=U*(1.06+q*(1.81-O*.18)),N=.12-O*.28+q*.23+Math.sin(q*3.14)*.035+H*(.012+.095*Math.sin(q*Math.PI));return[.632*Math.sin(B)*Math.cos(N),.572*Math.sin(N),.534*Math.cos(B)*Math.cos(N)]},a);for(let U=0;U<3;U++)R(this.body,(O,q)=>{const H=(O-.5)*3.2,B=-.4+U*.255+q*(.01+.052*Math.sin(Math.PI*O))+.045*Math.cos(O*Math.PI*2),N=Math.sqrt(Math.max(.01,1-(B/.67)**2));return[.489*Math.sin(H)*N,.53*Math.cos(H)*N,B]},a)}this.tail=e.group(this.rig,0,.51,-.55);const T=[[0,0,0],[.04,.025,-.22],[.15,.14,-.43],[.28,.35,-.59],[.37,.63,-.63],[.4,.89,-.55],[.35,1.08,-.38],[.24,1.14,-.23]],b=new fs(T.map(U=>new be(...U))),A=32,C=12,L=b.computeFrenetFrames(A,!1),z=[],M=[],v=[];for(let U=0;U<=A;U++){const O=U/A,q=b.getPointAt(O),H=(.145-.035*O)*(O>.885?Math.sqrt(Math.max(1e-4,1-((O-.885)/.115)**2)):1);let B=n;r==="tabby"?B=O>.9?s:O>.19&&O<.31||O>.46&&O<.59||O>.72&&O<.83?a:n:r==="siamese"?B=O>.45?a:n:r==="calico"?B=O>.62?f:O>.25?a:n:r==="tuxedo"&&(B=O>.84?s:n);const N=new Pe(B);for(let j=0;j<=C;j++){const te=j/C*2*Math.PI,ne=q.clone().addScaledVector(L.normals[U],-Math.cos(te)*H).addScaledVector(L.binormals[U],Math.sin(te)*H);if(z.push(ne.x,ne.y,ne.z),M.push(N.r,N.g,N.b),U&&j){const ge=U*(C+1)+j;v.push(ge-C-2,ge-C-1,ge-1,ge-C-1,ge,ge-1)}}}const w=new yt;w.setAttribute("position",new At(z,3)),w.setAttribute("color",new At(M,3)),w.setIndex(v),w.computeVertexNormals(),e.mesh(this.tail,e.own(w),16777215);const V=(U,O=[])=>{const q=e.group(U);for(const H of[...U.children])H!==q&&!O.includes(H)&&q.add(H);q.children.length?e.bake(q,!0):q.removeFromParent()};this.legs.forEach((U,O)=>V(U,this.claws[O]?[this.claws[O]]:[])),this.ears.forEach(U=>V(U)),this.eyes.forEach(U=>V(U)),V(this.head,[...this.ears,...this.eyes,this.hatGroup]),V(this.body),V(this.tail),V(this.rig,[this.head,this.body,this.tail,this.scarfGroup,...this.legs]),this.walkCycle=0,this.sleepMix=0,this.emote=0,this.offset=Math.random()*2,this.animState="Santai"}buildScarf(e){const t=this.s;this.scarfColor=e,this.scarfGroup.clear(),t.cyl(this.scarfGroup,0,.94,.26,.418,.395,.125,e,14),t.poly(this.scarfGroup,[[-.255,.06],[.24,.06],[.13,-.125],[-.015,-.285],[-.17,-.12]],.035,e).position.set(0,.895,.714),t.ball(this.scarfGroup,0,.646,.751,.064,.075,.022,16104802,1)}buildHat(e){const t=this.s;if(this.hatType=e||"none",this.hatGroup.clear(),!e||e==="none")return;const n=this.hatGroup;switch(e){case"straw":{const a=t.cyl(n,0,.56,.02,.78,.84,.075,14860410,14);a.rotation.x=-.06;const s=t.cyl(n,0,.72,.01,.34,.43,.28,15388812,12);s.rotation.x=-.06;const o=t.cyl(n,0,.62,.01,.435,.445,.085,12081230,12);o.rotation.x=-.06;break}case"beret":{const a=t.group(n,.06,.57,.02);a.rotation.set(-.08,.1,-.2),t.cyl(a,0,0,0,.44,.38,.08,9321036,14),t.ball(a,.04,.09,-.02,.53,.17,.5,12078179,1),t.rod(a,[.04,.22,-.02],[.09,.32,-.04],.028,8204352,.02,6);break}case"chef":{const a=t.group(n,0,.58,.02);t.cyl(a,0,.04,0,.34,.36,.18,15657437,12),t.ball(a,0,.28,0,.38,.24,.36,16579316,1);for(let s=0;s<4;s++){const o=s*Math.PI/2+.4;t.ball(a,Math.cos(o)*.2,.29,Math.sin(o)*.18,.22,.18,.22,16777215,1)}break}case"bow":{const a=t.group(n,-.26,.5,.18);a.rotation.set(.18,-.35,.32),t.ball(a,-.15,0,0,.17,.11,.07,14178931,1),t.ball(a,.15,0,0,.17,.11,.07,14178931,1),t.ball(a,0,0,.02,.075,.075,.065,15965872,1);break}case"crown":{const a=t.group(n,0,.57,.04);t.cyl(a,0,.06,0,.27,.24,.14,15973963,10);for(let s=0;s<5;s++){const o=s/5*Math.PI*2;t.cyl(a,Math.sin(o)*.21,.2,Math.cos(o)*.21,.01,.07,.18,16766055,5)}t.ball(a,0,.08,.26,.055,.06,.03,14239832,1);break}case"cap":{const a=t.group(n,0,.54,.04);t.ball(a,0,.06,-.02,.44,.23,.42,3894924,1);const s=t.cyl(a,0,-.02,.34,.35,.38,.045,2839403,10);s.scale.z=.72,s.rotation.x=.15,t.ball(a,0,.28,-.02,.055,.04,.055,15977066,0);break}case"glasses":{const a=t.group(n,0,.06,.52),s=t.geo("cat-glasses-rim",()=>new On(.155,.022,6,16));for(const o of[-1,1]){const r=new Je(s,t.mat(2961979));r.position.set(o*.24,0,.01),r.rotation.y=o*.24,a.add(r)}t.rod(a,[-.1,.02,.04],[.1,.02,.04],.018,2961979);break}}}setAppearance({scarf:e,hat:t}={}){e!==void 0&&e!==this.scarfColor&&this.buildScarf(e),t!==void 0&&t!==this.hatType&&this.buildHat(t)}triggerEmote(){this.emote=.75}animate(e,t,n,a,s,o=0,r=null){const f=t+this.offset;this.walkCycle+=e*n*(n>4?3.35:4.25);const d=Math.min(1,n/.9),l=this.walkCycle;this.sleepMix=Mi.damp(this.sleepMix,s?1:0,6,e);const c=this.sleepMix;this.emote=Math.max(0,this.emote-e);const g=this.emote>0?Math.sin(this.emote/.75*Math.PI)*.28:0,h=(r==null?void 0:r.attackT)??-1,x=(r==null?void 0:r.attackSide)??1,E=(r==null?void 0:r.eatT)??-1,p=(r==null?void 0:r.hurt)??0,u=(r==null?void 0:r.death)??0,R=h>=0?lt(h/Ye.swingTime,0,1):0,T=h>=0?Math.sin(Math.PI*R):0,b=E>=0?Math.sin(Math.PI*lt(E/Ye.eatTime,0,1))**.55:0,A=b*(.5+.5*Math.sin(f*24)),C=p>0?Math.sin(Math.PI*lt(p/.28,0,1)):0,L=u*u*(3-2*u);this.animState=u>0?"Pingsan":s?"Tidur":E>=0?"Makan":h>=0?"Mencakar":a?"Melompat":o>.06?"Mendarat":n>4.2?"Berlari":n>.12?"Berjalan":"Santai",this.rig.position.y=(Math.abs(Math.sin(l))*.09*d+(1-d)*Math.sin(f*2.4)*.018)*(1-c)*(1-L)-c*.17+T*.12+C*.08-b*.13+L*.3+g,this.rig.rotation.x=(a?-.12:Math.sin(l)*.028*d)*(1-L)-T*.14+b*.2+C*.13,this.rig.rotation.y=T*(.28-R*.6)*x,this.rig.rotation.z=c*.73+C*.15-L*1.46,this.rig.scale.set(1+o*.18,1-o*.33-c*.15,1+o*.12),this.head.rotation.y=(Math.sin(f*.85)*(.14-.085*d)*(1-c)-c*.5)*(1-b)*(1-L)+T*(.24-R*.48)*x,this.head.rotation.z=Math.sin(f*.56)*.035+c*.11,this.head.position.y=1.28+Math.sin(l*2)*.025*d-c*.195-b*.25,this.head.rotation.x=(a?-.12:c*.15+Math.sin(f*1.2)*.028)+b*.56+A*.15-C*.16+T*.08,this.tail.rotation.z=Math.sin(f*2.15)*.19*(1-L),this.tail.rotation.y=Math.sin(f*1.55)*.29*(1-L)+c*.8+T*.28*x,this.tail.rotation.x=-.18*d+c*.35+L*.3;const z=f%4.7>4.48?Math.max(.045,Math.abs(f%4.7-4.59)/.11):1,M=Math.max(c,L,b*.65);for(const v of this.eyes)v.scale.y=z*(1-M)+.05*M;this.ears.forEach((v,w)=>{const V=w===0?-1:1;v.rotation.x=Math.sin(f*2.1+w)*.035+(f%6.7>6.3?Math.sin(f*27)*.1:0)-C*.26+b*.14+g*.65,v.rotation.z=-V*(.1+C*.32+L*.22)}),this.legs.forEach((v,w)=>{const V=w>=2,U=w%2===0?-1:1,O=V&&U===x?T:0,q=Math.sin(l+(w===0||w===3?0:Math.PI))*(n>4?.85:.59)*d*(1-b)*(1-L);v.rotation.x=c*.85+(a?V?-.51:.65:q)-O*1.48-b*(V?.18:-.05)+L*(V?.48:-.34),v.rotation.z=V?U*(O*(.34-R*.7)+C*.06):0;const H=this.claws[w];H&&(H.visible=O>.38&&L<.1)})}}const su=8874828;class ou{constructor(e,t,n){var s,o;this.s=e,this.scene=t,this.static=e.group(t),this.dynamic=e.group(t),this.labels=e.group(t),this.colliders=[],this.cameraBoxes=[],this.targets=[],this.hideouts=[],this.butterflies=[],this.ripples=[],this.interiors=[],this.doors={},this.bridges=[],this.npcs=[],this.npcMap=new Map,this.r=bn(194),this.ray=new Zo,this.ray.layers.set(3),this.origin=new be,this.rayDir=new be,this.segA=new be,this.segB=new be,this.hits=[],this.playTimer=0,this.cafePlayTimer=0,this.sky(),this.terrain();const a=this.builder=new au(this);this.paths(),this.pond(),a.cottage(-12,10,1.93,5.55,4.6,3.26,11103568,15388578,!0),a.cottage(-6.7,-20.1,.16,5.9,5.06,3.69,8291481,15458488),a.cottage(2.5,-19.4,-.22,5.5,4.55,3.34,12024663,15388580),a.cottage(19,-15.5,-.53,5.12,4.5,3.36,9016474,14798500),a.cottage(-21.4,1.5,.98,4.8,4.1,2.96,11830890,15126175),a.cottage(21.7,21,-2.45,4.5,4,2.9,9541264,15060389),a.garden(),a.market(),this.plaza(),this.hunterProps(),a.marketStreet(),a.catCafeZone(),a.westWoodsZone(),a.eastRiverZone(),this.foliage(),this.wildlife(),this.spawnCats(),this.s.bake(this.static),this.setDoor(n.door,!0,"home"),this.setDoor(((s=n.shopDoors)==null?void 0:s.boutique)!==!1,!0,"boutique"),this.setDoor(((o=n.shopDoors)==null?void 0:o.salon)!==!1,!0,"salon"),this.setLamp(n.lamp),this.skyMesh.renderOrder=-10,this.temp=new be}block(e,t,n,a,s,o,r=!0){const f=fa(e,t,n,a,s,o);return this.colliders.push(f),r&&this.cameraBoxes.push(f),f}target(e,t,n,a,s,o,r=null,f=null){const d=new be(n,a,s),l=new Je(this.s.geo("actionhit",()=>new En(.42,6,5)),this.s.mat(16777215));l.position.copy(d),l.layers.set(3),this.dynamic.add(l),l.updateWorldMatrix(!0,!1);const c={id:e,label:t,point:d,hit:l,range:o,ignore:r,meta:f};return this.targets.push(c),c}nearest(e){const t=e.root.position;this.origin.copy(t),this.origin.y+=.83;let n=null,a=1/0;for(const s of this.targets){const o=Math.hypot(s.point.x-t.x,s.point.z-t.z);if(o>s.range||Math.abs(s.point.y-this.origin.y)>2.5)continue;this.rayDir.subVectors(s.point,this.origin);const r=this.rayDir.length();if(r<.01||(this.ray.set(this.origin,this.rayDir.normalize()),this.ray.far=r+.5,this.hits.length=0,this.ray.intersectObject(s.hit,!1,this.hits),!this.hits.length&&r>.42))continue;let f=!1;for(const c of this.cameraBoxes)if(c!==s.ignore&&pi(this.origin,s.point,c)<.91){f=!0;break}if(f)continue;const d=Math.sin(e.root.rotation.y)*(s.point.x-t.x)+Math.cos(e.root.rotation.y)*(s.point.z-t.z),l=o-Math.max(0,d)*.13;l<a&&(a=l,n=s)}return n}inInteriorBox(e,t,n,a=.25){const s=e.frame;if(!s)return!1;const o=t-s.position.x,r=n-s.position.z,f=Math.cos(s.rotation.y),d=Math.sin(s.rotation.y),l=o*f-r*d,c=o*d+r*f;return Math.abs(l)<e.hw+a&&Math.abs(c)<e.hd+a}inHomeInterior(e,t,n=.25){const a=this.homeFrame;if(!a)return!1;const s=e-a.position.x,o=t-a.position.z,r=Math.cos(a.rotation.y),f=Math.sin(a.rotation.y),d=s*r-o*f,l=s*f+o*r;return Math.abs(d)<2.8+n&&Math.abs(l)<2.35+n}inAnyInterior(e,t,n=.25){for(const a of this.interiors)if(this.inInteriorBox(a,e,t,n))return!0;return!1}inMouseSafeZone(e,t,n=.25){if(this.inAnyInterior(e,t,n))return!0;for(const a of jo)if(a.kind==="rect"){if(e>=a.minX-n&&e<=a.maxX+n&&t>=a.minZ-n&&t<=a.maxZ+n)return!0}else if(a.kind==="circle"&&Math.hypot(e-a.x,t-a.z)<a.r+n)return!0;return!1}inWater(e,t,n=0){const a=this.lake;if(!a)return!1;const s=(e-a.x)/(a.rx+n*.72),o=(t-a.z)/(a.rz+n*.72);return s*s+o*o<1}canPlace(e,t,n=.35,a=!1){const s=sr-n-.6;if(e<-s||e>s||t<-s||t>s||this.inWater(e,t,n+.12)||!a&&this.inMouseSafeZone(e,t,n+.35))return!1;for(const o of this.colliders)if(!(!o.enabled||o.h<.28)&&Qo(e,t,n,o))return!1;return!0}slide(e,t,n,a){const s=e.x,o=e.z,r={x:s+t,y:0,z:o+n};_n(r,a,this.colliders),this.keepOutOfWater(r,a,!1),this.inMouseSafeZone(r.x,r.z,a+.12)&&(r.x=s,r.z=o),e.x=r.x,e.z=r.z;const f=Math.hypot(t,n);return f<1e-6?1:lt(Math.hypot(e.x-s,e.z-o)/f,0,1)}lineClear(e,t,n,a,s=.14){this.segA.set(e,.48,t),this.segB.set(n,.48,a);for(const o of this.colliders)if(!(!o.enabled||o.h<.55)&&pi(this.segA,this.segB,o,s)<.995)return!1;return!0}spawnPositions(e,t,n){const a=(n==null?void 0:n.x)??0,s=(n==null?void 0:n.z)??5.4;if(t===1&&e===la.length){const d=la.filter(([l,c])=>this.canPlace(l,c,.5)&&Math.hypot(l-a,c-s)>4.2);if(d.length===e)return d.map(l=>[...l])}const o=[],r=bn(535+t*827),f=d=>{const l=-38+r()*76,c=-22+r()*44;return this.canPlace(l,c,.72)&&Math.hypot(l-a,c-s)>d&&o.every(g=>Math.hypot(g[0]-l,g[1]-c)>2.2)?[l,c]:null};for(let d=0;d<e;d++){let l=null;for(let c=0;!l&&c<140;c++)l=f(c<90?7.2:4.2);if(!l)for(let c=-22;c<=22&&!l;c+=2.4)for(let g=-36;g<=36&&!l;g+=2.4)this.canPlace(g,c,.55)&&Math.hypot(g-a,c-s)>3.5&&o.every(h=>Math.hypot(h[0]-g,h[1]-c)>1.5)&&(l=[g,c]);l&&o.push(l)}return o}spawnCats(){const e=this.s;for(const t of Jo){const n=new _s(e,this.dynamic,t.appearance),a=this.surfaceAt({x:t.x,z:t.z});n.root.position.set(t.x,a,t.z),n.root.scale.setScalar(t.appearance.scale||1.03),n.root.rotation.y=t.angle||0;const s=t.shopName?`Kunjungi ${t.name} (${t.shopName})`:`Bicara dengan ${t.name}`,o=this.target(`cat:${t.id}`,s,t.x,a+1.15,t.z,2.85,null,{catId:t.id});let r=null;t.behavior!=="stroll"&&(r=this.block(t.x,t.z,.62,.72,0,1.85,!1));const f={id:t.id,data:t,cat:n,target:o,collider:r,x:t.x,z:t.z,homeAngle:t.angle||0,speed:0,wpIndex:0,pauseTimer:.6+this.r()*1.4};this.npcs.push(f),this.npcMap.set(t.id,f),t.id==="miso"&&(this.npc=n,this.npcAngle=f.homeAngle)}}getNpc(e){return this.npcMap.get(e)||null}emoteNpc(e){const t=this.npcMap.get(e);t==null||t.cat.triggerEmote()}sky(){const e=this.s;this.scene.background=new Pe(13163743),this.scene.fog=new er(12901596,.0052);const t=e.own(new kt({side:xt,depthWrite:!1,uniforms:{zenith:{value:new Pe(6007004)},horizon:{value:new Pe(13100008)}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP; uniform vec3 zenith;uniform vec3 horizon;void main(){float h=clamp(normalize(vP).y,0.,1.);gl_FragColor=vec4(mix(horizon,zenith,pow(h,.48)),1.);
#include <colorspace_fragment>
}`}));this.skyMesh=new Je(e.geo("sky",()=>new En(240,24,16)),t),this.skyMesh.frustumCulled=!1,this.scene.add(this.skyMesh);const n=new tr(16769720,2.45);n.position.set(-24,40,19),n.castShadow=!0;const a=n.shadow.camera;a.left=-36,a.right=36,a.top=36,a.bottom=-36,a.near=1,a.far=115;const s=matchMedia("(pointer:coarse)").matches?1024:2048;n.shadow.mapSize.set(s,s),n.shadow.normalBias=.037,n.shadow.bias=-4e-4,n.shadow.radius=2.5,this.sun=n,this.scene.add(n,n.target),this.scene.add(new nr(15070463,10071441,1.48)),this.scene.add(new ir(15785924,.16));const o=this.r;for(let r=0;r<36;r++){const f=r/36*Math.PI*2,d=92+o()*44,l=e.rock(this.static,Math.sin(f)*d,-1.6,Math.cos(f)*d,17+o()*16,9+o()*14,17+o()*12,[9218214,10400942,9217190,11845552][r%4],1);l.rotation.y=o()*5,l.castShadow=!1}for(let r=0;r<20;r++){const f=r*.314+this.r()*.25,d=70+o()*55,l=18+this.r()*14,c=Math.sin(f)*d,g=Math.cos(f)*d;for(let h=0;h<3;h++){const x=e.rock(this.static,c+(h-1)*3.4,l+Math.sin(h*1.5)*1.4,g+this.r(),4+o()*2.2,1.25+o()*1.3,3.1,16773591,1);x.castShadow=!1}}}terrain(){const e=this.s,t=new cn(340,340,88,88);t.rotateX(-Math.PI/2);const n=t.attributes.position,a=new Pe,s=[];for(let r=0;r<n.count;r++){const f=n.getX(r),d=n.getZ(r);a.setHex(8432496),a.offsetHSL(Math.sin(f*.1)*.01,Math.sin(d*.23)*.018,(Math.sin(f*.12+d*.22)+Math.cos(d*.092))*.018+(this.r()-.5)*.012),s.push(a.r,a.g,a.b)}t.setAttribute("color",new At(s,3));const o=e.mesh(this.static,e.own(t),e.own(new Zt({vertexColors:!0})));o.castShadow=!1}ribbon(e,t,n,a=.025){const s=e.map(([x,E])=>new be(x,0,E)),o=new fs(s),r=o.getLength(),f=Math.ceil(r*2),d=[],l=[];for(let x=0;x<=f;x++){const E=x/f,p=o.getPoint(E),u=o.getTangent(E),R=t*(1+Math.sin(E*35)*.027+Math.sin(E*79)*.014)/2;if(d.push(p.x-u.z*R,a,p.z+u.x*R,p.x+u.z*R,a,p.z-u.x*R),x<f){const T=x*2;l.push(T,T+2,T+1,T+1,T+2,T+3)}}const c=new yt;c.setAttribute("position",new At(d,3)),c.setIndex(l),c.computeVertexNormals();const g=this.s.mat(n);g.side=pt;const h=this.s.mesh(this.static,this.s.own(c),g);return h.castShadow=!1,o}paths(){const e=this.builder,t=this.r;[[[0,31.5],[-.3,24],[-.6,17],[.9,8],[0,2],[-.5,-4],[-2.8,-11],[-2.2,-20],[-1.8,-28.8]],[[-.3,1.9],[3.8,-1.1],[8.4,-4.85],[13.8,-5.2],[20.2,-10.5],[24.6,-18.8],[24.2,-28]],[[-.8,-1.4],[-5.3,-3.8],[-9.3,-6.35],[-14,-8.3],[-18.2,-11.4],[-22.5,-12.2],[-28.5,-12.8],[-33.5,-8.2],[-34.2,.5],[-32.2,8.2],[-25.5,14.5],[-17.2,18.2],[-7.5,18.2],[-.6,17.2]],[[-.1,4.6],[-4.6,6.6],[-7.1,8.7],[-9.6,9.2]],[[1.3,3.9],[6,5.1],[9.85,5.1],[13,4.55],[18,4.7],[21.6,7.7],[21.9,11.4],[21.4,15.8]],[[2,14.7],[7,16.1],[12.4,15.25],[17,15.4],[22,17.8],[27.8,19.6],[33.2,17.5],[33.8,10.4],[33.5,3.5],[30.2,-5.8],[27.2,-17.5],[24.2,-28]],[[-7,-16.9],[-5,-15.72],[-2.42,-14.4],[.5,-15.1],[3.2,-16.5]],[[-13.5,-28.8],[-6,-29],[5.5,-28.8],[16.5,-29],[24.2,-28]]].forEach((a,s)=>{const o=s===0||s===7?3.8:s===1?3.1:2.55;this.ribbon(a,o+.25,11316604,.025+s*45e-5);const r=this.ribbon(a,o,s%2?13745557:14206108,.037+s*6e-4),f=Math.round(r.getLength()*1.15);for(let d=0;d<f;d++){const l=(d+.4)/f,c=r.getPoint(l),g=r.getTangent(l),h=(t()-.5)*o*.83,x=e.stone(this.static,c.x+h*g.z,.055+s*8e-4,c.z-h*g.x,.1+t()*.23,.027+t()*.021,.085+t()*.14,[13022607,13351577,14733229,12432532][d%4]);x.castShadow=!1}}),e.patch(0,1.3,4.5,4.4,13088399,.041),e.patch(0,1.3,4.3,4.2,13877662,.054);for(let a=0;a<46;a++){const s=a*2.4,o=Math.sqrt((a+.5)/46)*4,r=e.stone(this.static,Math.cos(s)*o,.073,1.3+Math.sin(s)*o,.23+t()*.28,.035,.16+t()*.12,[13221279,14733230,13219477][a%3]);r.castShadow=!1}}pond(){const e=this.builder,t=this.s,n=14,a=10,s=4.72,o=3.65;this.lake={x:n,z:a,rx:s,rz:o},e.patch(n,a,s+1.03,o+.85,10992016,.018),e.patch(n,a,s+.48,o+.36,12630427,.033);const r=[[17.2,10.8],[21.86,11.35],[27.5,11.4],[33.8,10.4],[40.5,12.2],[50,14.2],[62,16.5]];this.ribbon(r,2.35,12105371,.046),this.ribbon(r,1.9,8632763,.063);const f=t.cyl(this.dynamic,n,.071,a,1,1,.035,7780025,40);f.scale.x=s,f.scale.z=o,f.castShadow=!1,f.material=t.own(new Zt({color:7780025,roughness:.29,metalness:.07}));for(let l=0;l<21;l++){const c=l/21*6.28+.12;if(c>2.9&&c<3.64)continue;const g=.94+this.r()*.13;if(e.stone(this.static,n+Math.sin(c)*(s+.13)*g,.13+this.r()*.09,a+Math.cos(c)*(o+.18)*g,.31+this.r()*.39,.2+this.r()*.25,.35+this.r()*.28,[10331285,11317920,12567465,9346193][l%4]),l%2===0)for(let h=0;h<4;h++){const x=n+Math.sin(c)*s+(this.r()-.5)*.45,E=a+Math.cos(c)*o+(this.r()-.5)*.41,p=.65+this.r()*.43;t.rod(this.static,[x,.04,E],[x+.045,p,E],.023,7309911,.018,5),t.cyl(this.static,x+.045,p+.1,E,.049,.05,.21,10318929,7)}}for(let l=0;l<12;l++){const c=this.r()*6.28,g=.29+this.r()*.56,h=n+Math.sin(c)*s*g,x=a+Math.cos(c)*o*g,E=t.cyl(this.static,h,.12,x,.23+this.r()*.13,.29,.028,[9415536,10337145,9087340][l%3],9);if(E.scale.z=.76,l%4===0)for(let p=0;p<5;p++){const u=p*1.26;t.ball(this.static,h+Math.sin(u)*.08,.16,x+Math.cos(u)*.08,.079,.07,.087,15320253,0)}}const d=t.own(new It({color:15201241,transparent:!0,opacity:.43,depthWrite:!1}));for(let l=0;l<14;l++){const c=this.r()*6.28,g=this.r()*.77,h=new Je(t.geo("ripple",()=>new Si(.89,1,26,1,.2,4.35)),d);h.rotation.x=-Math.PI/2,h.rotation.z=this.r()*4,h.position.set(n+Math.sin(c)*s*g,.103,a+Math.cos(c)*o*g),this.dynamic.add(h),this.ripples.push({ring:h,phase:this.r()*6,scale:.13+this.r()*.3})}for(let l=0;l<9;l++)t.box(this.static,13.42,.18,5.57+l*.3,1.64,.17,.275,l%3?11703661:12296314);for(const l of[12.65,14.2])for(const c of[5.63,7.9])t.cyl(this.static,l,.27,c,.09,.115,.67,9599320,7),t.cyl(this.static,l,.625,c,.108,.108,.07,12755319,7);this.target("pond","Memancing di kolam",13.43,.72,7.67,2.68),e.sign(11.65,4.77,"KOLAM KECIL",-.17,1.9),t.rod(this.static,[14.23,.42,7.55],[14.8,2.24,9.08],.045,11963225,.016,6),t.rod(this.static,[14.8,2.24,9.08],[14.82,.16,9.5],.007,13950928,.007,4),this.bobber=t.ball(this.dynamic,14.82,.18,9.5,.073,.095,.073,12877153,0),e.bridge(21.86,11.35,-.1)}plaza(){const e=this.builder,t=this.s;e.lamp(-3.9,4,.3),e.lamp(3.6,-4.1,2.85,!0),e.lamp(-5.8,-12,.8),e.lamp(16,-3.55,2.88),e.lamp(-6.6,11.3,-1.45),e.lamp(5.3,14.7,0),e.lamp(-18.7,5.3,.45),e.fence([-20.7,6.8],[-19,14]),e.fence([-18.8,15],[-11.6,16.7]),e.fence([6.5,-12.2],[12.1,-13.8]),e.fence([4.7,9.6],[6.3,13.6]);const n=t.group(this.static,3.14,0,1.86);t.cyl(n,0,1.25,0,.122,.185,2.5,9007186,7);for(const[s,o,r]of[[2.18,-1,7902089],[1.82,1,11109984],[1.46,-1,9411196]]){const f=t.poly(n,[[-.65,-.14],[.63,-.14],[.88,0],[.63,.14],[-.65,.14]],.09,r);f.rotation.y=o===-1?Math.PI:0,f.position.set(o*.23,s,.11)}t.cyl(n,0,2.61,0,0,.23,.22,12820070,6),this.block(3.14,1.86,.27,.27,0,2.8,!1),e.pot(n,-.52,0,.01,.87),e.pot(n,.41,0,-.26,.63);const a=t.group(this.static,-3.2,0,.98);t.cyl(a,0,.06,0,1.3,1.36,.12,12037520,12);for(let s=0;s<3;s++)for(let o=0;o<11;o++){const r=o/11*6.28+s*.29,f=t.box(a,Math.sin(r)*.9,.23+s*.28,Math.cos(r)*.9,.56,.25,.31,[11382168,12105633,10725274,12499875][(o+s)%4]);f.rotation.y=r}t.cyl(a,0,.15,0,.78,.78,.04,7839389,14);for(const s of[-1,1])t.box(a,s*.96,1.61,0,.18,2.33,.19,su);t.rod(a,[-1.17,2.2,0],[1.19,2.2,0],.09,9926226),t.rod(a,[.08,2.22,0],[.08,.62,0],.022,11377265),t.cyl(a,.075,.69,0,.19,.15,.33,10126953,8);for(const s of[-1,1]){const o=t.box(a,s*.55,2.99,0,1.49,.14,1.78,8099473);o.rotation.z=-s*.47}t.box(a,0,3.3,0,.16,.16,1.87,6914685),this.block(-3.2,.98,2.05,2.06,0,.93,!1),this.cameraBoxes.push(fa(-3.2,.98,2.1,1.8,0,3.38))}hunterProps(){const e=this.builder;e.veggieBed(-14.8,1.3,3.2,1.65),e.veggieBed(3.6,-11.4,3.1,1.6);for(const[t,n,a]of[[-13.9,-5.8,.36],[-13.3,-6.2,.25],[5.5,-11.4,.38],[6.1,-10.9,.26],[-15.2,2.9,.34],[-14.6,3.2,.23]])e.pumpkin(t,n,a);e.barrel(15.2,-9.8,1.05),e.crate(15.9,-8.8,.72,.24),e.barrel(-17.4,12.8,1),e.crate(-16.5,13.5,.68,-.2),e.stump(4.8,10.6,.85),e.stump(-3.8,-8.8,.8);for(const[t,n,a]of[[-4.4,-8.3,.14],[-4.1,-8.1,.1],[4.2,10.2,.13],[4.5,10,.095],[-10.2,3.8,.13],[7.1,2.1,.12],[7.4,2.3,.09]])e.mushroom(t,n,a);for(const[t,n,a]of[[-8.6,-13.1,.88],[3.4,-9.2,.85],[16.2,-1.6,.92],[6.1,12.2,.88],[-6.8,14.5,.86],[-15.8,-2.5,.85]])e.hideout(t,n,a)}foliage(){const e=this.builder,t=this.r,n=[[-8,1,.93,"fruit"],[-18,8,1.13,"oak"],[-16.9,17.8,1.03,"gold"],[-5.8,17.4,1.02,"oak"],[3,18.7,.92,"pine"],[7.4,11.8,1.05,"oak"],[18.9,7.3,1,"fruit"],[21,-.5,1.32,"oak"],[15.9,-15,1,"pink"],[5.7,-13.6,.91,"gold"],[-10.65,-14.7,.82,"pink"],[-14.5,-20,1.25,"pine"],[-22,-7.1,1.05,"oak"],[-23,17.2,1.12,"pine"],[15.6,20.5,1.07,"pine"],[22,4.63,.83,"oak"]];for(const[s,o,r,f]of n)e.tree(s,o,r,f);for(let s=0;s<92;s++){const o=s/92*6.28+.02*t(),r=50+t()*17,f=Math.sin(o)*r,d=Math.cos(o)*r;e.tree(f,d,1.15+t()*.95,s%3?"pine":"oak",!1)}for(let s=0;s<56;s++){const o=s/56*6.28+this.r()*.06,r=46.8+t()*2.2,f=Math.sin(o)*r,d=Math.cos(o)*r;if(e.bush(f,d,1.55+t()*1.4,s%2?8363632:7247209),s%3===0){const l=e.stone(this.static,f,.55,d,1.25+t(),1+t()*.8,1.15+t(),10202016);this.block(f,d,l.scale.x*1.1,l.scale.z*1.1,0,l.scale.y+.4)}}const a=[[-5.55,3.24],[5.35,2.75],[-7.7,12.9],[16.6,4.42],[-6.46,-6.46],[7.6,13.7],[-14,4.9],[-8.3,-17.2],[17,-3.7]];for(let s=0;s<a.length;s++){const[o,r]=a[s];e.patch(o,r,1.36,1.05,8956529,.026);for(let f=0;f<12;f++){const d=t()*6.28,l=t();e.flower(this.static,o+Math.sin(d)*l*1.23,r+Math.cos(d)*l*.9,[16772542,15255163,14004164,15849902][(s+f)%4],.8+t()*.6)}e.bush(o+.87,r-.23,.54,8232807)}for(let s=0;s<1150;s++){const o=(t()-.5)*86,r=(t()-.5)*86;if(Math.abs(o)<2.6||Math.hypot((o-14)/6,(r-10)/5)<1||Math.hypot(o,r-2)<5||r<-24.5&&r>-39&&o>-15&&o<26||r>23&&r<40&&o>-13&&o<13||o>16&&r>8.2&&r<14.2)continue;const f=[8956263,8824172,10598521,7576678][s%4];e.grass(o,r,.57+t()*.51,f),s%21===0&&e.stone(this.static,o,.07,r,.16+t()*.15,.11+t()*.08,.17+t()*.1,11251604)}}wildlife(){const e=this.s,t=[[-14,-12],[-14,-12],[-14,-12],[-14,-12],[-14,-12],[0,31],[0,31],[6,-29],[6,-29],[30,12],[30,12],[-31,-9]];for(let n=0;n<t.length;n++){const[a,s]=t[n],o=e.group(this.dynamic);e.ball(o,0,0,0,.023,.029,.089,7959659,0);const r=[];for(const f of[-1,1]){const d=e.group(o),l=e.ball(d,f*.092,.012,-.013,.12,.018,.14,[15907949,15050167,10798299][n%3],0);l.rotation.y=f*.32,r.push(d)}this.butterflies.push({g:o,wings:r,a:this.r()*6.28,x:a+(this.r()-.5)*6,z:s+(this.r()-.5)*6})}}surfaceAt(e){if(e.x>=12.59&&e.x<=14.25&&e.z>=5.42&&e.z<=8.12)return .265;if(e.x>=28.98&&e.x<=30.62&&e.z>=11.9&&e.z<=13.6)return .255;for(const t of this.bridges){const n=e.x-t.x,a=e.z-t.z,s=Math.cos(t.angle),o=Math.sin(t.angle),r=n*s-a*o,f=n*o+a*s;if(Math.abs(r)<1.06&&Math.abs(f)<1.94)return .205+Math.sin(lt((f+1.8)/3.6,0,1)*Math.PI)*.35}for(const t of this.interiors){const n=t.frame;if(!n)continue;const a=e.x-n.position.x,s=e.z-n.position.z,o=Math.cos(n.rotation.y),r=Math.sin(n.rotation.y),f=a*o-s*r,d=a*r+s*o;if(Math.abs(f)<t.hw-.02&&Math.abs(d)<t.hd-.02)return .28;if(Math.abs(f)<1.25&&d>t.front-.05&&d<t.front+.78)return .18}return 0}keepOutOfWater(e,t,n=!0){const a=this.lake;if(n&&e.x>12.73&&e.x<14.1&&e.z<8.19)return;const s=(e.x-a.x)/(a.rx+t*.6),o=(e.z-a.z)/(a.rz+t*.6),r=Math.hypot(s,o);if(r<1){const f=r<1e-7?0:Math.atan2(o,s);e.x=a.x+Math.cos(f)*(a.rx+t*.6),e.z=a.z+Math.sin(f)*(a.rz+t*.6)}}locationAt(e){let t=null,n=1;for(const a of ar){const s=Math.hypot(a.x-e.x,a.z-e.z)/a.r;s<n&&(t=a,n=s)}return t}setDoor(e,t=!1,n="home"){const a=this.doors[n]||this.door;if(!a)return;a.open=e,a.b.enabled=!e,t&&(a.angle=e?1.48:0,a.hinge.rotation.y=a.angle);const s=this.targets.find(o=>o.id===a.targetId);s&&(s.label=e?a.openLabel:a.closedLabel)}setLamp(e){this.lantern.material=this.s.mat(e?16767624:8425867),this.lantern.material.emissive.setHex(e?16757591:0),this.lantern.material.emissiveIntensity=e?.48:0;const t=this.targets.find(n=>n.id==="lamp");t&&(t.label=e?"Matikan lentera":"Nyalakan lentera")}update(e,t,n){var r;const a=n.root.position;for(const f of Object.values(this.doors))f.angle=Mi.damp(f.angle,f.open?1.48:0,8,e),f.hinge.rotation.y=f.angle;for(const f of this.interiors){const d=f.frame.worldToLocal(this.temp.copy(a));f.roof.visible=!(Math.abs(d.x)<f.hw+.08&&Math.abs(d.z)<f.hd+.08)}this.ripples.forEach(({ring:f,phase:d,scale:l})=>{const c=.96+.39*Math.sin(t*1.68+d);f.scale.set(l*c,l*c*.7,1)}),this.bobber.position.y=.197+Math.sin(t*(n.busy>0?12:2.2))*.054,this.riverBobber&&(this.riverBobber.position.y=.197+Math.sin(t*(n.busy>0?11:2.5)+1.4)*.05),this.butterflies.forEach(({g:f,wings:d,a:l,x:c,z:g},h)=>{f.position.set(c+Math.sin(t*.41+l)*1.7,1.2+Math.sin(t*.9+l)*.35,g+Math.cos(t*.47+l)*1.15),f.rotation.y=t*.48+l,d[0].rotation.z=Math.sin(t*18+h)*.91,d[1].rotation.z=-d[0].rotation.z});for(let f=0;f<this.npcs.length;f++){const d=this.npcs[f],l=d.cat.root,g=Math.hypot(a.x-l.position.x,a.z-l.position.z)<4.8;let h=0,x=d.data.behavior==="nap"&&!g;if(d.data.behavior==="stroll"&&((r=d.data.waypoints)!=null&&r.length))if(g)h=0;else if(d.pauseTimer>0)d.pauseTimer-=e,h=0;else{const[E,p]=d.data.waypoints[d.wpIndex],u=E-d.x,R=p-d.z,T=Math.hypot(u,R);if(T<.45)d.wpIndex=(d.wpIndex+1)%d.data.waypoints.length,d.pauseTimer=1.2+f*.37%1.4;else{const b=Math.min(T,1.32*e),A=d.x+u/T*b,C=d.z+R/T*b,L={x:A,y:0,z:C};_n(L,.36,this.colliders),this.keepOutOfWater(L,.36,!0);const z=Math.hypot(L.x-d.x,L.z-d.z);d.x=L.x,d.z=L.z;const M=this.surfaceAt(L);l.position.set(d.x,M,d.z),d.target.point.set(d.x,M+1.15,d.z),d.target.hit.position.copy(d.target.point),d.target.hit.updateWorldMatrix(!0,!1),h=e>1e-4?z/e:0;const v=Math.atan2(u,R);l.rotation.y=Ot(l.rotation.y,v,5.5,e),z<b*.15&&(d.wpIndex=(d.wpIndex+1)%d.data.waypoints.length)}}if(g){const E=Math.atan2(a.x-l.position.x,a.z-l.position.z);l.rotation.y=Ot(l.rotation.y,E,4.5,e)}else d.data.behavior!=="stroll"&&(l.rotation.y=Ot(l.rotation.y,d.homeAngle,3,e));d.speed=h,d.cat.animate(e,t+f*1.7,h,!1,x)}if(this.playTimer>0){this.playTimer=Math.max(0,this.playTimer-e);const f=1-this.playTimer/1.6;this.yarn.position.set(-11.8+Math.sin(f*Math.PI)*1.27,.34+Math.abs(Math.sin(f*Math.PI*3))*(1-f)*.65,-8.8+Math.sin(f*Math.PI)*.45),this.yarn.rotation.z-=e*6}if(this.cafePlayTimer>0&&this.cafeYarn){this.cafePlayTimer=Math.max(0,this.cafePlayTimer-e);const f=1-this.cafePlayTimer/1.6;this.cafeYarn.position.set(7.2-Math.sin(f*Math.PI)*1.2,.34+Math.abs(Math.sin(f*Math.PI*3))*(1-f)*.65,28.4+Math.sin(f*Math.PI)*.5),this.cafeYarn.rotation.z+=e*6}const s=Math.round(a.x),o=Math.round(a.z);this.sun.target.position.set(s,0,o),this.sun.position.set(s-24,40,o+19),this.sun.target.updateMatrixWorld(),this.skyMesh.position.copy(a)}dispose(){var e;(e=this.sun.shadow.map)==null||e.dispose()}}class ru{constructor(e,t,n){var l,c,g;this.progress=n;const a=((c=Fn[(l=n.equipped)==null?void 0:l.scarf])==null?void 0:c.color)??4103834,s=((g=n.equipped)==null?void 0:g.hat)??"none";this.cat=new _s(e,t,{scarf:a,hat:s}),this.root=this.cat.root,this.root.position.set(n.position.x,0,n.position.z),this.root.rotation.y=-.54,this.velocity=new ut,this.vy=0,this.grounded=!0,this.sleeping=!1,this.busy=0,this.running=!1,this.walking=!1,this.driveAngle=this.root.rotation.y,this.land=0,this.step=0,this.speed=0,this.tired=!1,this.jumpBuffer=0,this.coyote=.1,this.radius=Ye.radius,this.attackT=-1,this.attackHeading=this.root.rotation.y,this.attackSide=1,this.attackApplied=!1,this.cooldown=0,this.eatT=-1,this.eatTarget=null,this.hurt=0,this.death=0;const o=document.createElement("canvas");o.width=o.height=64;const r=o.getContext("2d"),f=r.createRadialGradient(32,32,0,32,32,31);f.addColorStop(0,"rgba(31,38,44,0.35)"),f.addColorStop(.45,"rgba(38,45,42,.22)"),f.addColorStop(1,"rgba(37,47,40,0)"),r.fillStyle=f,r.fillRect(0,0,64,64);const d=e.own(new xi(o));this.shadow=new Je(e.geo("shadowplane",()=>new cn(1,1)),e.own(new It({map:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}))),this.shadow.rotation.x=-Math.PI/2,this.shadow.scale.set(1.95,2.05,1),t.add(this.shadow)}get x(){return this.root.position.x}set x(e){this.root.position.x=e}get y(){return this.root.position.y}set y(e){this.root.position.y=e}get z(){return this.root.position.z}set z(e){this.root.position.z=e}get heading(){return this.root.rotation.y}set heading(e){this.root.rotation.y=e}get hp(){return this.progress.stats.hp}set hp(e){this.progress.stats.hp=lt(e,0,this.progress.maxHp)}syncAppearance(){var n,a,s;const e=((a=Fn[(n=this.progress.equipped)==null?void 0:n.scarf])==null?void 0:a.color)??4103834,t=((s=this.progress.equipped)==null?void 0:s.hat)??"none";this.cat.setAppearance({scarf:e,hat:t})}update(e,t,n,a,s,o,r,f,d=[],l=null){this.hurt=Math.max(0,this.hurt-e),(this.sleeping||this.busy>0||this.eatT>=0)&&(n={x:0,z:0,run:!1},a=!1),this.busy=Math.max(0,this.busy-e),r.stats.energy<1&&(this.tired=!0),r.stats.energy>12&&(this.tired=!1);const c=Math.hypot(n.x,n.z)>.025;this.walking=c,this.running=n.run&&c&&!this.tired;const h=(this.running?Ye.run*(r.speedMultiplier||1):Ye.walk*(r.catnipTimer>0?1.18:1))*(this.attackT>=0?.65:1)*(this.hurt>.2?.6:1),x=Math.sin(s),E=Math.cos(s),p=(n.x*E-n.z*x)*h,u=(-n.x*x-n.z*E)*h;c&&(this.driveAngle=Lt(n.x*E-n.z*x,-n.x*x-n.z*E));const R=1-Math.exp(-e*(c?15:21));if(this.velocity.x+=(p-this.velocity.x)*R,this.velocity.y+=(u-this.velocity.y)*R,this.speed=this.velocity.length(),this.attackT>=0)this.root.rotation.y=Ot(this.root.rotation.y,this.attackHeading,26,e);else if(this.eatT>=0&&this.eatTarget)this.root.rotation.y=Ot(this.root.rotation.y,Lt(this.eatTarget.x-this.x,this.eatTarget.z-this.z),14,e);else if(this.speed>.09){const M=Math.atan2(this.velocity.x,this.velocity.y);this.root.rotation.y=Ot(this.root.rotation.y,M,14,e)}this.jumpBuffer=a?.12:Math.max(0,this.jumpBuffer-e),this.coyote=this.grounded?.09:Math.max(0,this.coyote-e),this.jumpBuffer>0&&this.coyote>0&&(this.grounded=!1,this.coyote=0,this.jumpBuffer=0,this.vy=Ye.jump,f.sfx("jump"));const T=Math.max(1,Math.ceil(e/(1/90))),b=e/T,A=this.root.position,C=A.x,L=A.z;for(let M=0;M<T;M++){const v=A.y;A.x+=this.velocity.x*b,A.z+=this.velocity.y*b,_n(A,this.radius,o.colliders),o.keepOutOfWater(A,this.radius),this.vy-=Ye.gravity*b,A.y+=this.vy*b;const w=Math.max(o.surfaceAt(A),da(A,o.colliders,v));A.y<=w&&this.vy<=0?(!this.grounded&&this.vy<-2&&(this.land=.7,f.sfx("land"),l==null||l.burst(A,"dust",5)),A.y=w,this.vy=0,this.grounded=!0):this.grounded=!1}if(this.eatTarget&&this.eatT>=0&&this.eatT<.34){const M=this.eatTarget.x-A.x,v=this.eatTarget.z-A.z,w=Math.hypot(M,v);if(w>.92){const V=Math.min(w-.92,e*3.1)/w;A.x+=M*V,A.z+=v*V,_n(A,this.radius,o.colliders),o.keepOutOfWater(A,this.radius)}}if(A.y<.55&&c&&this.eatT<0&&d.length)for(const M of d){if(M.state===Ie.DEAD)continue;const v=A.x-M.x,w=A.z-M.z,V=Math.hypot(v,w),U=.76;V>=U||V<1e-5||(A.x+=v/V*(U-V)*.65,A.z+=w/V*(U-V)*.65,_n(A,this.radius,o.colliders),o.keepOutOfWater(A,this.radius))}const z=Math.hypot(A.x-C,A.z-L)/Math.max(1e-4,e);z<.2&&(this.running=!1),this.speed=Math.min(this.speed,z),this.land=Math.max(0,this.land-e*3.8),this.cat.animate(e,t,this.speed,!this.grounded,this.sleeping,this.land,{attackT:this.attackT,attackSide:this.attackSide,eatT:this.eatT,hurt:this.hurt,death:this.death}),this.grounded&&this.speed>.35&&this.eatT<0&&(this.step+=this.speed*e,this.step>1.25&&(f.sfx("step",this.speed),this.running&&(l==null||l.burst(A,"dust",2)),this.step=0)),this.updateShadow(o),r.position.x=A.x,r.position.z=A.z}die(e,t,n){this.death=lt(this.death+e/.82,0,1),this.speed=0,this.hurt=Math.max(0,this.hurt-e);const a=this.root.position,s=n.surfaceAt(a);a.y>s?(this.vy-=Ye.gravity*e,a.y=Math.max(s,a.y+this.vy*e)):this.vy=0,this.cat.animate(e,t,0,!1,!1,0,{attackT:-1,attackSide:this.attackSide,eatT:-1,hurt:this.hurt,death:this.death}),this.updateShadow(n)}revive(e,t,n,a){this.death=0,this.hurt=0,this.attackT=-1,this.cooldown=0,this.eatTarget&&(this.eatTarget.reserved=!1),this.eatTarget=null,this.eatT=-1,this.sleeping=!1,this.busy=0,this.vy=0,this.grounded=!0,this.velocity.set(0,0),this.root.position.set(e,a.surfaceAt({x:e,z:t}),t),this.root.rotation.y=n,this.updateShadow(a)}updateShadow(e){const t=this.root.position;this.shadow.position.set(t.x,Math.max(.08,e.surfaceAt(t)+.025,da(t,e.colliders,Math.max(0,t.y))+.035),t.z),this.shadow.material.opacity=1/(1+t.y*.7)}stop(){this.velocity.set(0,0),this.running=!1}}function Pt(i,e=0,t=0,n=0){const a=new vi;return a.position.set(e,t,n),i&&i.add(a),a}class cu{constructor(e){this.scene=e,this.live=Pt(e),this.rigs=new Set,this.geos=new Map,this.mats=new Map,this.batched=new Map,this.geos.set("body",new En(1,14,10)),this.geos.set("detail",new En(1,10,7)),this.geos.set("plane",new cn(1,1)),this.geos.set("ring",new Si(.86,1,32));const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),a=n.createRadialGradient(32,32,4,32,32,31);a.addColorStop(0,"rgba(28,25,14,0.68)"),a.addColorStop(.5,"rgba(28,25,14,0.32)"),a.addColorStop(1,"rgba(28,25,14,0)"),n.fillStyle=a,n.fillRect(0,0,64,64),this.shadowTex=new xi(t),this.shadowTex.colorSpace=kn,this.contactMat=new It({map:this.shadowTex,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),this.ringMat=new It({color:"#f8d681",transparent:!0,opacity:.65,depthWrite:!1,side:pt,toneMapped:!1}),this.alertMat=new It({color:"#f49a71",transparent:!0,opacity:.6,depthWrite:!1,side:pt,toneMapped:!1})}mat(e){return this.mats.has(e)||this.mats.set(e,new Zt({color:e,roughness:.85,flatShading:!0})),this.mats.get(e)}mesh(e,t,n,a,s,o,r,f,d,l=!1){const c=new Je(typeof t=="string"?this.geos.get(t):t,this.mat(n));return c.position.set(a,s,o),c.scale.set(r,f,d),c.castShadow=l,c.receiveShadow=l,e.add(c),c}bulb(e,t,n,a,s,o,r,f,d=!1,l="detail"){return this.mesh(e,l,t,n,a,s,o,r,f,d)}cylinder(e,t,n,a,s,o,r,f,d=7,l=!1){const c=`bone:${d}:${(o/r).toFixed(3)}`;return this.geos.has(c)||this.geos.set(c,new rs(o/r,1,1,d)),this.mesh(e,c,t,n,a,s,r,f,r,l)}line(e,t,n,a,s=.009){const o=new be(...n),f=new be(...a).clone().sub(o),d=o.clone().addScaledVector(f,.5),l=this.cylinder(e,t,d.x,d.y,d.z,s*.4,s,f.length(),5);return l.quaternion.setFromUnitVectors(new be(0,1,0),f.normalize()),l}create(e){const t=Pt(this.live),n=Pt(t),a=new Je(this.geos.get("plane"),this.contactMat);a.rotation.x=-Math.PI/2,a.position.y=.036,a.scale.set(1.52,1.53,1),this.live.add(a);const s=new Je(this.geos.get("ring"),this.ringMat);s.rotation.x=-Math.PI/2,s.visible=!1,this.live.add(s);const o={root:t,body:n,shadow:a,ring:s,legs:[],ears:[],tail:[],variant:e%5,privateGeos:[]},r=[["#796d76","#8e7f86","#c5a99e"],["#796f66","#95837a","#ceb49c"],["#726974","#8b7889","#c4a9a7"],["#85786c","#978878","#d3bda4"],["#716971","#8b7f83","#c8aaa1"]][o.variant],[f,d,l]=r;this.bulb(n,f,0,.287,-.104,.269,.268,.407,!0,"body"),this.bulb(n,l,0,.22,.135,.197,.171,.273,!1);const c=o.head=Pt(n,0,.35,.236);this.bulb(c,d,0,-.01,0,.228,.205,.275,!0,"body"),this.bulb(c,l,0,-.066,.195,.144,.104,.186,!1),this.bulb(c,"#55434a",0,-.038,.365,.053,.04,.041),this.bulb(c,"#d2a49a",-.014,-.026,.392,.025,.015,.009);for(const p of[-1,1]){const u=Pt(c,p*.175,.158,-.12);u.rotation.y=p*.3,u.rotation.z=-p*.28,o.ears.push(u),this.bulb(u,d,p*.02,.06,0,.148,.171,.073,!0,"body"),this.bulb(u,"#ca9293",p*.021,.067,.05,.116,.136,.047,!1,"body"),this.bulb(u,"#d9aaa1",p*.017,.057,.077,.078,.1,.021);const R=this.bulb(c,"#2d2729",p*.177,.039,.123,.06,.066,.048);R.rotation.y=p*.63,this.bulb(c,"#f7e8c5",p*.195,.065,.148,.019,.02,.019);for(let T=0;T<2;T++)this.line(c,"#d4bba4",[p*.092,-.067-T*.041,.281],[p*(.306+T*.043),-.034-T*.084,.303-T*.057],.009)}for(const p of[!0,!1])for(const u of[-1,1]){const R=Pt(n,u*(p?.146:.17),.237,p?.155:-.272),T=Pt(R,0,-.102,0);this.bulb(R,d,0,-.03,0,p?.09:.113,.132,.111),this.bulb(T,"#b68c85",0,-.073,.049,.073,.053,.106),o.legs.push({hip:R,joint:T,front:p,s:u})}const g=[.152,.156,.176,.178,.175,.146,.113],h=[.055,.05,.045,.038,.03,.024,.017,.006],x=["#b78985","#be9189","#c59891","#c79d94"];let E=Pt(n,0,.205,-.416);for(let p=0;p<g.length;p++){const u=g[p],R=h[p],T=h[p+1];o.tail.push(E);const b=this.cylinder(E,x[p%x.length],0,0,-u*.5,T,R,u*1.045,7);b.rotation.x=-Math.PI/2,this.bulb(E,x[p%x.length],0,0,-u,T,T,T),E=Pt(E,0,0,-u)}return this.batch(o)}batch(e){const t=[];e.root.traverse(n=>{n.isGroup&&t.push(n)});for(const n of t){const a=new Map;for(const s of n.children.filter(o=>o.isMesh)){const o=`${s.castShadow}:${s.receiveShadow}`;a.has(o)||a.set(o,[]),a.get(o).push(s)}for(const[s,o]of a){if(o.length===1)continue;let r=this.batched.get(s);r||(r=new Zt({vertexColors:!0,flatShading:!0,roughness:.85}),this.batched.set(s,r));const f=o.map(c=>{const g=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone();c.updateMatrix(),g.applyMatrix4(c.matrix),g.deleteAttribute("uv");const h=g.attributes.position.count,x=new Float32Array(h*3),{r:E,g:p,b:u}=c.material.color;for(let R=0;R<x.length;R+=3)x[R]=E,x[R+1]=p,x[R+2]=u;return g.setAttribute("color",new Yt(x,3)),g}),d=gs(f,!1);for(const c of f)c.dispose();if(!d)continue;const l=new Je(d,r);l.castShadow=o[0].castShadow,l.receiveShadow=o[0].receiveShadow,e.privateGeos.push(d),n.remove(...o),n.add(l)}}return this.rigs.add(e),e}pose(e,t,n=0){const a=e.rig,s=a.body,o=e.state===Ie.DEAD?lt(e.deadTime/.49,0,1):0,r=o*o*(3-2*o),f=lt(e.speed/2.8,0,1),d=e.state===Ie.ATTACKING&&e.attackTimer>=0?lt(e.attackTimer/e.windup,0,1):0,l=Math.sin(Math.PI*lt(e.hurt/.25,0,1)),c=Math.sin(Math.PI*lt(e.attackHop/.28,0,1));a.root.position.set(e.x,n,e.z),a.root.rotation.y=e.heading,a.shadow.position.set(e.x,n+.04,e.z),s.position.set(0,.011*Math.sin(t*4+e.index)+Math.abs(Math.sin(e.gait))*f*.065+.2*c+.18*r,0);const g=e.reserved?1-.82*lt(((e.eatProgress??0)-.67)/.33,0,1):1;if(s.scale.set((1+d*.07-l*.06)*g,(1-d*.13+l*.12)*g,(1+f*.064+d*.14)*g),s.rotation.set(-.07*f+.19*d-.25*c+.17*l,0,Math.sin(e.gait)*.054*f+l*.14+(e.index%2?1:-1)*1.54*r),a.head.rotation.set(.085*Math.sin(t*3+e.index)+.16*d-.25*c,.16*Math.sin(t*1.47+e.index)*(1-f)*(1-r),0),a.ears.forEach((h,x)=>{h.rotation.z=(x===0?1:-1)*(.28+.081*Math.sin(t*5+e.index+x)+.31*l+.34*d)}),a.legs.forEach(({hip:h,joint:x,front:E},p)=>{const u=e.gait+(p===0||p===3?0:Math.PI);h.rotation.x=Math.cos(u)*.64*f-.66*c+(E?.46:-.27)*r,x.rotation.x=Math.max(0,Math.sin(u))*.3*f+.12*r}),a.tail.forEach((h,x)=>{h.rotation.x=(x===0?-.4:x===1?.24:.048)+(.15+x*.006)*Math.sin(t*3.3+e.index+x*.72)*(1-r)+.11*f+.16*c,h.rotation.y=(.16+.019*x)*Math.sin(t*3.2+e.index+x*.61)+r*.12}),a.ring.visible=r>.45&&!e.reserved||d>.32&&r===0,a.ring.position.set(e.x,n+.055,e.z),a.ring.visible){a.ring.material=r>0?this.ringMat:this.alertMat;const h=r>0?.72+.06*Math.sin(t*3.2+e.index):.78+d*.28;a.ring.scale.setScalar(h)}}remove(e){var t;if(this.rigs.delete(e)){e.root.removeFromParent(),e.shadow.removeFromParent(),(t=e.ring)==null||t.removeFromParent();for(const n of e.privateGeos)n.dispose()}}dispose(){for(const e of[...this.rigs])this.remove(e);for(const e of this.batched.values())e.dispose();this.live.removeFromParent(),this.live.clear();for(const e of this.geos.values())e.dispose();for(const e of this.mats.values())e.dispose();this.contactMat.dispose(),this.ringMat.dispose(),this.alertMat.dispose(),this.shadowTex.dispose()}}class lu{constructor(e,t,n,a,s,o){this.index=a,this.x=t,this.z=n;const r=(o==null?void 0:o.x)??0,f=(o==null?void 0:o.z)??5.4;this.heading=Lt(r-t,f-n)-.33+a*.27,this.rig=e?e.create(a):null,this.rand=bn(1282+a*3109+s*2581),this.hp=ct.hp,this.damage=ct.damage,this.state=Ie.WANDERING,this.speed=0,this.gait=this.rand()*Kt,this.age=0,this.wanderAngle=this.heading+this.rand()-.5,this.wanderTime=1.7+this.rand()*1.35,this.shelter=null,this.rest=.23+this.rand()*1.1,this.cool=.15+this.rand()*.37,this.hurt=0,this.detect=ct.detect+Math.min(3.8,(s-1)*.5),this.run=ct.run*(1+Math.min(.38,(s-1)*.07)),this.walk=ct.walk*(1+Math.min(.32,(s-1)*.065)),this.attackGap=Math.max(.5,ct.cooldown-(s-1)*.085)+this.rand()*.26,this.windup=Math.max(.2,ct.windup-(s-1)*.016)+this.rand()*.05,this.attackTimer=-1,this.attackHop=0,this.deadTime=0,this.reserved=!1,this.eatProgress=0,this.hasFled=!1,this.fleeFor=0,this.side=this.rand()<.5?1:-1,this.slideTurn=0,this.avoidTimer=0,this.knock=0,this.kx=0,this.kz=0}change(e){this.state!==e&&(this.state=e,this.age=0,e!==Ie.ATTACKING&&(this.attackTimer=-1),e===Ie.WANDERING&&(this.shelter=null,this.wanderTime=.4,this.rest=.1+this.rand()*.45))}damaged(e){this.hurt=.25;const t=Math.max(.001,Math.hypot(this.x-e.x,this.z-e.z));if(this.kx=(this.x-e.x)/t,this.kz=(this.z-e.z)/t,this.knock=.13,this.hp<=0){this.change(Ie.DEAD),this.deadTime=0,this.speed=0,this.knock=0;return}this.cool=Math.max(this.cool,.3),this.attackTimer=-1,this.hp<=20&&!this.hasFled&&this.index%3===2?(this.hasFled=!0,this.fleeFor=1.18+this.rand()*.64,this.change(Ie.FLEEING)):this.change(Ie.CHASING)}wander(e,t){var n;if(this.wanderTime-=e,this.rest=Math.max(0,this.rest-e),this.shelter)if(vn(this,this.shelter)<.16||this.wanderTime<=0)this.shelter=null,this.rest=.65+this.rand()*.55,this.wanderTime=this.rest;else return[Lt(this.shelter.x-this.x,this.shelter.z-this.z),this.walk];if(this.wanderTime<=0){if(this.rand()<.24&&((n=t.hideouts)!=null&&n.length)){const a=t.hideouts.filter(s=>{const o=vn(this,s);return o>1.3&&o<20&&t.lineClear(this.x,this.z,s.x,s.z,ct.radius)});if(a.length)return this.shelter=a[Math.floor(this.rand()*a.length)],this.wanderTime=3.8,[Lt(this.shelter.x-this.x,this.shelter.z-this.z),this.walk]}this.wanderAngle+=this.rand()*3.1-1.55,t.canPlace(this.x+Math.sin(this.wanderAngle)*1.15,this.z+Math.cos(this.wanderAngle)*1.15,ct.radius)||(this.wanderAngle+=this.side*(1+this.rand()*1.85)),this.wanderTime=1.05+this.rand()*2.1,this.rand()<.36&&(this.rest=.35+this.rand()*1.3)}return[this.wanderAngle,this.rest>0?0:this.walk]}navigate(e,t,n,a){this.avoidTimer=Math.max(0,this.avoidTimer-a);const s=lt(n*.3,.58,1.48),o=r=>t.canPlace(this.x+Math.sin(r)*s,this.z+Math.cos(r)*s,ct.radius+.05)&&t.canPlace(this.x+Math.sin(r)*s*.52,this.z+Math.cos(r)*s*.52,ct.radius+.02);if(o(e))return this.avoidTimer=0,e;if(this.avoidTimer>0&&o(e+this.slideTurn))return e+this.slideTurn;for(const r of[.62,1.12,1.54,2.05,2.68,Math.PI]){if(o(e+this.side*r))return this.slideTurn=this.side*r,this.avoidTimer=.34,e+this.slideTurn;if(o(e-this.side*r))return this.side*=-1,this.slideTurn=this.side*r,this.avoidTimer=.34,e+this.slideTurn}return e+this.side*1.65}update(e,t,n,a,s){if(this.hurt=Math.max(0,this.hurt-e),this.attackHop=Math.max(0,this.attackHop-e),this.state===Ie.DEAD){this.deadTime+=e;return}this.age+=e,this.cool=Math.max(0,this.cool-e),this.knock>0&&(this.knock=Math.max(0,this.knock-e),n.slide(this,this.kx*2.25*e,this.kz*2.25*e,ct.radius));const o=t.x-this.x,r=t.z-this.z,f=o*o+r*r,d=Math.sqrt(f),l=Lt(o,r);let c=0,g=l;const h=t.sleeping||t.hp<=0||(n.inMouseSafeZone?n.inMouseSafeZone(t.x,t.z,.1):!!(n.inHomeInterior&&n.inHomeInterior(t.x,t.z,.1))),x=E=>!h&&d<E&&t.y<2&&n.lineClear(this.x,this.z,t.x,t.z,.08);switch(this.state){case Ie.WANDERING:x(this.detect)?(this.change(Ie.DETECTING),s.alert(this)):[g,c]=this.wander(e,n);break;case Ie.DETECTING:h||d>this.detect+1.55?this.change(Ie.WANDERING):this.age>.28+this.index%3*.07&&this.change(Ie.CHASING);break;case Ie.CHASING:if(h||d>this.detect+5.2){this.change(Ie.WANDERING);break}if(d<ct.attackRange&&t.y<.9&&n.lineClear(this.x,this.z,t.x,t.z,.1)){this.change(Ie.ATTACKING);break}c=d>.9?this.run:0;break;case Ie.ATTACKING:if(h){this.change(Ie.WANDERING);break}if(this.attackTimer<0){if(d>ct.attackRange+.16||t.y>.85||!n.lineClear(this.x,this.z,t.x,t.z,.1)){this.change(Ie.CHASING);break}this.cool<=0&&(this.attackTimer=0,s.windup(this)),d>.94&&(c=Math.min(this.walk,d-.86+.28))}else this.attackTimer+=e,this.attackTimer>=this.windup&&(this.attackTimer=-1,this.attackHop=.28,this.cool=this.attackGap,d<ct.attackRange+.1&&t.y<.72&&n.lineClear(this.x,this.z,t.x,t.z,.1)?s.bite(this):s.miss(this),d>.88&&d<1.66&&n.slide(this,Math.sin(l)*Math.min(.11,d-.82),Math.cos(l)*Math.min(.11,d-.82),ct.radius));break;case Ie.FLEEING:if(this.fleeFor-=e,h||this.fleeFor<=0||d>this.detect+2.2){this.change(!h&&d<this.detect+1.4?Ie.CHASING:Ie.WANDERING);break}c=this.run*1.12,g=l+Math.PI+this.side*.15;break}if(c>0&&this.knock<=.035){let E=this.navigate(g,n,c,e),p=Math.sin(E),u=Math.cos(E);for(const L of a){if(L===this||L.state===Ie.DEAD)continue;const z=this.x-L.x,M=this.z-L.z,v=Math.hypot(z,M);if(v>1e-4&&v<.85){const w=(.85-v)*1.52;p+=z/v*w,u+=M/v*w}}E=Lt(p,u);const R=this.state===Ie.WANDERING||this.state===Ie.FLEEING||d>1.35;this.heading=Ot(this.heading,R?E:l,this.state===Ie.WANDERING?6.1:11.2,e);const T=this.x,b=this.z,A=(this.state===Ie.CHASING||this.state===Ie.ATTACKING)&&d<1.2?lt(d-.79,0,.41)/.41:1;n.slide(this,Math.sin(E)*c*e*A,Math.cos(E)*c*e*A,ct.radius)<.05&&this.state===Ie.WANDERING&&(this.wanderAngle+=this.side*(1.35+this.rand()*.9),this.wanderTime=.55),this.speed=ua(this.speed,Math.hypot(this.x-T,this.z-b)/Math.max(1e-4,e),15,e)}else this.speed=ua(this.speed,0,13,e),this.state!==Ie.WANDERING&&(this.heading=Ot(this.heading,g,13,e));this.gait+=e*this.speed*4.9}}class fu{constructor(e,t){this.world=e,this.events=t}edible(e,t){if(e.y>.55||e.hp<=0||e.sleeping)return null;let n=null,a=Ye.eatRange**2;for(const s of t){if(s.state!==Ie.DEAD||s.reserved||s.deadTime<.24)continue;const o=vn(e,s);o<a&&this.world.lineClear(e.x,e.z,s.x,s.z,.1)&&(n=s,a=o)}return n}valid(e,t,n){if(t.state===Ie.DEAD||e.y>1.32)return!1;const a=vn(e,t);return a>Ye.range**2?!1:(a<.24||Math.cos(ha(n,Lt(t.x-e.x,t.z-e.z)))>=Ye.horizontalFloor)&&this.world.lineClear(e.x,e.z,t.x,t.z,.16)}aim(e,t,n){let a=null,s=1/0;for(const o of t){if(o.state===Ie.DEAD)continue;const r=vn(e,o);if(r>Ye.range**2*1.38)continue;const f=Lt(o.x-e.x,o.z-e.z),d=Math.abs(ha(n,f));if(d>1.12&&(e.walking||r>1.65**2)||!this.world.lineClear(e.x,e.z,o.x,o.z,.14))continue;const l=r+d*.88;l<s&&(s=l,a=f)}return a??n}tryAttack(e,t,n){if(e.sleeping||e.busy>0||e.eatT>=0||e.cooldown>0||e.attackT>=0||e.hp<=0)return!1;e.attackT=0,e.cooldown=Ye.cooldown,e.attackSide*=-1,e.attackApplied=!1;const a=e.walking?e.driveAngle:e.heading,s=this.aim(e,t,a),o=this.aim(e,t,n);return e.attackHeading=s!==a?s:o!==n?o:a,!0}tryEat(e,t){var a,s;if(e.attackT>=0||e.eatT>=0||e.sleeping||e.busy>0)return!1;const n=this.edible(e,t);return n?(n.reserved=!0,n.eatProgress=0,e.eatT=0,e.eatTarget=n,e.stop(),(s=(a=this.events).eatStart)==null||s.call(a,e,n),!0):!1}update(e,t,n){var a,s,o,r,f,d,l,c,g,h,x,E;if(e.cooldown=Math.max(0,e.cooldown-n),e.eatT>=0){const p=e.eatT;if(e.eatT+=n,e.eatTarget&&(e.eatTarget.eatProgress=e.eatT/Ye.eatTime),p<.28&&e.eatT>=.28&&((s=(a=this.events).chew)==null||s.call(a,e,e.eatTarget)),p<.58&&e.eatT>=.58&&((r=(o=this.events).chew)==null||r.call(o,e,e.eatTarget)),e.eatT>=Ye.eatTime){const u=e.eatTarget;e.eatT=-1,e.eatTarget=null;const R=((f=e.progress)==null?void 0:f.maxHp)??or,T=e.hp,b=Math.min(R-T,Ye.heal);e.hp=T+b,(l=(d=this.events).eat)==null||l.call(d,e,u,b)}return}if(e.attackT>=0){if(e.attackT+=n,!e.attackApplied&&e.attackT>=Ye.activeAt){e.attackApplied=!0;const p=((c=e.progress)==null?void 0:c.attackDamage)??Ye.damage;let u=0;for(const R of t)this.valid(e,R,e.attackHeading)&&(R.hp=Math.max(0,R.hp-p),R.damaged(e),u++,(h=(g=this.events).scratch)==null||h.call(g,R,e,p));(E=(x=this.events).swipe)==null||E.call(x,e,u)}e.attackT>=Ye.swingTime&&(e.attackT=-1)}}bite(e,t){var n,a,s,o,r,f,d;if(!(e.hp<=0||t.state===Ie.DEAD||e.sleeping)){if(((n=e.progress)==null?void 0:n.shieldCharges)>0){e.progress.shieldCharges--,(s=(a=this.events).shieldBlock)==null||s.call(a,e,t);return}e.hp=Math.max(0,e.hp-ct.damage),e.hurt=.28,(r=(o=this.events).bite)==null||r.call(o,e,t),e.hp<=0&&(e.eatTarget&&(e.eatTarget.reserved=!1),e.eatT=-1,e.attackT=-1,e.eatTarget=null,(d=(f=this.events).fatal)==null||d.call(f,e))}}}class du{constructor(e,t,n,a=0){this.camera=e,this.world=t,this.prefs=n,this.yaw=a,this.pitch=.29,this.dist=8.2,this.target=new be,this.desired=new be,this.lastDrag=8,this.focus=new be,this.lastRadius=8.2,this.ready=!1,this.basisYaw=a,this.lastAxes={x:0,z:0},this.dragged=!1}get forwardYaw(){return this.yaw+Math.PI}look(e,t){const n=this.prefs.sensitivity*48e-6;this.yaw-=e*n,this.pitch=lt(this.pitch+t*n*.68,.12,1.12),this.lastDrag=0,this.dragged=!0}movementBasis(e){return(this.dragged||Math.hypot(e.x-this.lastAxes.x,e.z-this.lastAxes.z)>.1||Math.hypot(e.x,e.z)<.02)&&(this.basisYaw=this.yaw),this.dragged=!1,this.lastAxes.x=e.x,this.lastAxes.z=e.z,this.basisYaw}zoom(e){this.dist=lt(this.dist+e,3.8,10.5)}update(e,t,n){if(this.lastDrag+=e,this.lastDrag>2.6&&t.speed>1&&n.z>.36&&t.attackT<0){const d=t.root.rotation.y+Math.PI,l=Math.atan2(Math.sin(d-this.yaw),Math.cos(d-this.yaw));this.yaw+=l*(1-Math.exp(-e*.48))}this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw));const a=t.root.position;this.focus.set(a.x,a.y+1.12,a.z),this.ready?this.target.lerp(this.focus,1-Math.exp(-e*14)):this.target.copy(this.focus);const s=Math.cos(this.pitch),o=this.dist+(t.running?.32:0);this.desired.set(Math.sin(this.yaw)*s,Math.sin(this.pitch),Math.cos(this.yaw)*s).multiplyScalar(o).add(this.target);let r=1;for(const d of this.world.cameraBoxes){const l=pi(this.target,this.desired,d,.14);l<r&&(r=l)}const f=Math.max(.16,o*r-.18);this.lastRadius=f<this.lastRadius?f:Mi.damp(this.lastRadius,f,6,e),this.desired.sub(this.target).normalize().multiplyScalar(this.lastRadius).add(this.target),this.desired.y=Math.max(.55,this.desired.y),this.camera.position.copy(this.desired),t.root.visible=this.lastRadius>.82,this.camera.lookAt(this.target),this.camera.updateMatrixWorld(),this.ready=!0}}const Va=(i,e,t=5)=>Array.from({length:t*2},(n,a)=>[Math.cos(Math.PI/2+a*Math.PI/t)*(a%2?e:i),Math.sin(Math.PI/2+a*Math.PI/t)*(a%2?e:i)]);class uu{constructor(e,t,n){this.root=e.group(t),this.items=[];const a={};let s=e.group();const o=e.cyl(s,0,0,0,.33,.33,.115,15381320,16);o.rotation.x=Math.PI/2;for(const l of[-1,1]){const c=new Je(e.geo("coinrim",()=>new On(.267,.019,4,16)),e.mat(16768903));c.position.z=l*.064,s.add(c);const g=e.poly(s,Va(.163,.083,4),.02,16767858);g.position.z=l===1?.064:-.089}a.coin=e.bake(s),s=e.group(),e.ball(s,-.02,0,0,.4,.205,.143,6993088,1),e.ball(s,.03,-.037,.008,.32,.157,.145,9554896,1);let r=e.poly(s,[[-.26,.025],[-.54,.213],[-.52,-.17]],.108,5282473);r.position.z=-.052,r=e.poly(s,[[-.16,.142],[-.08,.29],[.084,.138]],.082,4887199),r.position.z=-.04;for(const l of[-1,1])e.ball(s,.214,.042,l*.115,.045,.046,.028,2771543,0),e.ball(s,.23,.055,l*.14,.013,.013,.01,16777215,0),e.rock(s,-.042,-.034,l*.139,.104,.052,.03,5610666);a.fish=e.bake(s),s=e.group();const f=new cs(Va(.425,.205).map(l=>new ut(...l))),d=e.own(new ls(f,{depth:.12,bevelEnabled:!0,bevelSize:.026,bevelThickness:.027,bevelSegments:1}));e.mesh(s,d,15975022,0,0,-.055),e.ball(s,-.08,.035,.109,.026,.033,.013,9858887,0),e.ball(s,.08,.035,.109,.026,.033,.013,9858887,0),a.star=e.bake(s);for(const l of rr){if(n.collected.has(l.id))continue;const c=a[l.type].clone(!0);c.position.set(l.x,.84,l.z),this.root.add(c),this.items.push({...l,mesh:c,phase:this.items.length*1.82})}}update(e,t,n,a){var r;const s=n.root.position,o=((r=n.progress)==null?void 0:r.collectRadius)??1.12;for(let f=this.items.length-1;f>=0;f--){const d=this.items[f],l=d.mesh,c=Math.hypot(l.position.x-s.x,l.position.z-s.z);if(!n.sleeping&&n.hp>0&&o>1.2&&c<o&&c>.35){const h=Math.min(c,e*8.5);l.position.x+=(s.x-l.position.x)/c*h,l.position.z+=(s.z-l.position.z)/c*h}l.position.y=.92+Math.sin(t*2.65+d.phase)*.135,l.rotation.y=t*(d.type==="coin"?1.65:.91)+d.phase,l.rotation.z=Math.sin(t*1.7+d.phase)*.093;const g=Math.hypot(l.position.x-s.x,l.position.z-s.z);!n.sleeping&&n.hp>0&&g<Math.max(1.12,o*.42)&&Math.abs(l.position.y-(s.y+.76))<1.4&&(a(d),this.root.remove(l),this.items.splice(f,1))}}}class hu{constructor(e,t){this.root=new vi,t.add(this.root),this.rand=bn(9243),this.pool=[],this.swings=[],this.pulses=[],this.max=200,this.time=0,this.dummy=new cr,this.mesh=new lr(e.geo("spark",()=>new fr(1,0)),e.own(new It({color:16777215,toneMapped:!1})),this.max),this.mesh.count=0,this.mesh.instanceMatrix.setUsage(dr),this.mesh.frustumCulled=!1,this.root.add(this.mesh),this.colors={fish:new Pe(11791601),coin:new Pe(16768388),star:new Pe(16771234),heart:new Pe(16758194),leaf:new Pe(12839340),hit:new Pe(16237180),crit:new Pe(16773304),hurt:new Pe(16029810),dust:new Pe(14470560),heal:new Pe(14481562),catnip:new Pe(10481828),shield:new Pe(12113151)},this.ringGeo=e.own(new Si(.87,1,36));const n=[],a=[],s=["#fff8dc","#f9d488","#fbeac4"].map(d=>new Pe(d));for(let d=0;d<3;d++){const l=(c,g)=>{const h=-1.18+c*2.36+d*.05,x=1.18+d*.1+.28*Math.sin(Math.PI*c)+g*(.115-d*.022)*Math.sin(Math.PI*c**.73)**.72;return[Math.sin(h)*x,.66+.28*Math.sin(c*3)+.15*d+(c-.5)*.34+g*.03,Math.cos(h)*x]};for(let c=0;c<28;c++){const g=c/28,h=(c+1)/28,x=s[d];n.push(...l(g,0),...l(g,1),...l(h,0),...l(h,0),...l(g,1),...l(h,1));for(let E=0;E<6;E++)a.push(x.r,x.g,x.b)}}this.swipeGeo=e.own(new yt),this.swipeGeo.setAttribute("position",new At(n,3)),this.swipeGeo.setAttribute("color",new At(a,3));const o=e.own(new yt),r=[];this.motes=[];for(let d=0;d<96;d++){const l={x:(this.rand()-.5)*84,y:this.rand()*4.2+.4,z:(this.rand()-.5)*84,p:this.rand()*Kt};this.motes.push(l),r.push(l.x,l.y,l.z)}o.setAttribute("position",new At(r,3));const f=e.own(new ur({color:"#fff0c2",size:.052,sizeAttenuation:!0,transparent:!0,opacity:.45,depthWrite:!1,toneMapped:!1}));this.motePoints=new hr(o,f),this.motePoints.frustumCulled=!1,this.root.add(this.motePoints)}burst(e,t="coin",n=12){const a=this.colors[t]||this.colors.coin,s=t==="heal",o=t==="dust",r=t==="hit"||t==="hurt"||t==="crit";for(let f=0;f<n;f++){this.pool.length>=this.max&&this.pool.shift();const d=this.rand()*Kt,l=o?.4+this.rand()*.9:s?.45+this.rand()*1.15:r?.8+this.rand()*2.2:.65+this.rand()*1.7;this.pool.push({x:e.x+Math.sin(d)*.08,y:(e.y??0)+(o?.08:.28),z:e.z+Math.cos(d)*.08,vx:Math.cos(d)*l,vy:o?.35+this.rand()*.85:s?1.75+this.rand()*1.55:1.4+this.rand()*2.3,vz:Math.sin(d)*l,t:0,life:(s?.58:.4)+this.rand()*.36,size:(o?.048:.036)+this.rand()*.048,kind:t,c:a})}}slash(e,t){const n=new It({color:"#ffffff",vertexColors:!0,transparent:!0,depthWrite:!1,opacity:1,side:pt,toneMapped:!1}),a=new Je(this.swipeGeo,n);a.position.set(e.x,e.y,e.z),a.rotation.y=e.attackHeading+e.attackSide*.1,this.root.add(a),this.swings.push({m:a,age:0,life:t?.27:.19,hit:t})}pulse(e,t,n,a=.55,s=0,o=.06){const r=new It({color:n,side:pt,depthWrite:!1,transparent:!0,toneMapped:!1,opacity:0}),f=new Je(this.ringGeo,r);f.position.set(e,o,t),f.rotation.x=-Math.PI/2,this.root.add(f),this.pulses.push({m:f,age:-s,life:a})}healBurst(e){const t={x:e.x,y:e.y+.3,z:e.z};this.burst(t,"heal",24),this.burst(t,"coin",8),this.pulse(e.x,e.z,"#eaf5a5",.6,0,e.y+.06),this.pulse(e.x,e.z,"#c6f0a2",.76,.1,e.y+.06)}update(e){this.time+=e;for(let n=this.pool.length-1;n>=0;n--){const a=this.pool[n];if(a.t+=e,a.t>a.life){this.pool.splice(n,1);continue}a.x+=a.vx*e,a.z+=a.vz*e,a.y+=a.vy*e,a.kind!=="heal"&&(a.vy-=(a.kind==="dust"?4.6:6.2)*e,a.y<.04&&(a.y=.04,a.vy*=-.18,a.vx*=.55,a.vz*=.55))}for(let n=0;n<this.pool.length;n++){const a=this.pool[n],s=this.dummy;s.position.set(a.x,a.y,a.z),s.rotation.set(a.t*4.5,n*.8,a.t*3.5);const o=a.size*(1-lt(a.t/a.life,0,1))**.65;s.scale.set(o,o*(a.kind==="heal"?1.7:1.3),o),s.updateMatrix(),this.mesh.setMatrixAt(n,s.matrix),this.mesh.setColorAt(n,a.c)}this.mesh.count=this.pool.length,this.pool.length&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0));for(let n=this.swings.length-1;n>=0;n--){const a=this.swings[n];if(a.age+=e,a.age>=a.life){a.m.material.dispose(),a.m.removeFromParent(),this.swings.splice(n,1);continue}const s=a.age/a.life;a.m.scale.set(1+s*.22,1+s*.14,1+s*.22),a.m.material.opacity=(a.hit?1:.72)*(1-s)**1.12}for(let n=this.pulses.length-1;n>=0;n--){const a=this.pulses[n];if(a.age+=e,a.age>=a.life){a.m.material.dispose(),a.m.removeFromParent(),this.pulses.splice(n,1);continue}if(a.m.visible=a.age>=0,a.m.visible){const s=a.age/a.life;a.m.scale.setScalar(.28+1.8*(1-(1-s)**2)),a.m.material.opacity=.68*(1-s)}}const t=this.motePoints.geometry.attributes.position;for(let n=0;n<this.motes.length;n++){const a=this.motes[n];t.setXYZ(n,a.x+Math.sin(this.time*.45+a.p)*.45,a.y+Math.sin(this.time*.68+a.p)*.26,a.z+Math.cos(this.time*.39+a.p)*.4)}t.needsUpdate=!0}clearTransient(){this.pool.length=0,this.mesh.count=0;for(const e of[...this.swings,...this.pulses])e.m.material.dispose(),e.m.removeFromParent();this.swings.length=0,this.pulses.length=0}dispose(){this.clearTransient(),this.mesh.dispose(),this.root.removeFromParent()}}class pu{constructor(e,t,n,a){this.keys=new Set,this.pressed=new Set,this.joy={x:0,z:0},this.runToggle=!1,this.controller=new AbortController;const s={signal:this.controller.signal};this.listen=(A,C,L,z={})=>{A&&A.addEventListener(C,L,{...s,...z})};const o=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyE","KeyF","KeyN","Digit1","Digit2","Digit3"]);this.listen(window,"keydown",A=>{!t()||!o.has(A.code)||A.ctrlKey||A.metaKey||A.altKey||(A.preventDefault(),this.keys.has(A.code)||this.pressed.add(A.code),this.keys.add(A.code))}),this.listen(window,"keyup",A=>this.keys.delete(A.code)),this.listen(window,"blur",()=>this.clear());let r=null,f=0,d=0,l=0,c=0,g=0,h=0,x=!1;this.listen(e,"pointerdown",A=>{!t()||r!==null||A.pointerType==="mouse"&&A.button!==0&&A.button!==2||(r=A.pointerId,f=A.button,d=c=A.clientX,l=g=A.clientY,h=performance.now(),x=!1,e.setPointerCapture(r),e.focus({preventScroll:!0}))}),this.listen(e,"pointermove",A=>{if(A.pointerId!==r||!t())return;const C=A.clientX-d,L=A.clientY-l;d=A.clientX,l=A.clientY,!x&&Math.hypot(A.clientX-c,A.clientY-g)>6&&(x=!0),(x||f===2||A.pointerType!=="mouse")&&n(C,L)});const E=(A,C)=>{A.pointerId===r&&(C&&t()&&A.pointerType==="mouse"&&f===0&&!x&&performance.now()-h<320&&this.pressed.add("Attack"),r=null)};this.listen(e,"lostpointercapture",()=>{r=null}),this.listen(e,"pointercancel",A=>E(A,!1)),this.listen(e,"pointerup",A=>E(A,!0)),this.listen(e,"wheel",A=>{t()&&(A.preventDefault(),a(Math.sign(A.deltaY)*.45))},{passive:!1}),this.listen(e,"contextmenu",A=>A.preventDefault());const p=document.querySelector("#joystick"),u=document.querySelector("#stick");let R=null;const T=A=>{const C=p.getBoundingClientRect(),L=C.width*.33,z=A.clientX-C.left-C.width/2,M=A.clientY-C.top-C.height/2,v=Math.min(1,L/Math.max(.001,Math.hypot(z,M)));this.joy.x=z*v/L,this.joy.z=-M*v/L,u.style.transform=`translate(${z*v}px,${M*v}px)`};this.listen(p,"pointerdown",A=>{t()&&(A.preventDefault(),R=A.pointerId,p.setPointerCapture(R),T(A))}),this.listen(p,"pointermove",A=>{A.pointerId===R&&T(A)});const b=()=>{R=null,this.joy.x=this.joy.z=0,u&&(u.style.transform="")};this.listen(p,"lostpointercapture",b),this.listen(p,"pointercancel",b),this.listen(p,"pointerup",b),this.listen(document.querySelector("#mobile-attack"),"pointerdown",A=>{A.preventDefault(),t()&&this.pressed.add("Attack")}),this.listen(document.querySelector("#mobile-jump"),"pointerdown",A=>{A.preventDefault(),t()&&this.pressed.add("Space")}),this.listen(document.querySelector("#mobile-interact"),"pointerdown",A=>{A.preventDefault(),t()&&this.pressed.add("KeyE")}),this.listen(document.querySelector("#mobile-run"),"click",()=>{t()&&(this.runToggle=!this.runToggle,this.updateRun())})}updateRun(){const e=document.querySelector("#mobile-run");e&&(e.classList.toggle("on",this.runToggle),e.setAttribute("aria-pressed",String(this.runToggle)))}axes(){let e=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0)+this.joy.x,t=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)+this.joy.z;const n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),{x:e,z:t,run:this.runToggle||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}}take(e){const t=this.pressed.has(e);return this.pressed.delete(e),t}takeAttack(){const e=this.take("Attack"),t=this.take("KeyF");return e||t}clear(){this.keys.clear(),this.pressed.clear(),this.joy.x=this.joy.z=0,this.runToggle=!1,this.updateRun();const e=document.querySelector("#stick");e&&(e.style.transform="")}dispose(){this.clear(),this.controller.abort()}}class gu{constructor(e,t,n,a,s,o){this.host=e,this.progress=t,this.prefs=n,this.audio=a,this.ui=s,this.events=o,this.active=!1,this.dead=!1,this.dying=!1,this.mice=[],this.waveCaught=0,this.renderer=new nu({antialias:!0,powerPreference:"high-performance",alpha:!1});try{this.initialize()}catch(r){throw this.dispose(),r}}initialize(){const e=this.renderer;e.outputColorSpace=kn,e.toneMapping=os,e.toneMappingExposure=.98,e.shadowMap.enabled=this.prefs.shadows,e.shadowMap.type=ss,e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0,this.pixelRatio=Math.min(window.devicePixelRatio||1,1.55),e.setPixelRatio(this.pixelRatio),e.domElement.tabIndex=0,e.domElement.setAttribute("aria-label","Desa Willowbrook 3D: WASD bergerak, seret kamera, klik/F mencakar, Spasi lompat, E interaksi/obrol/makan, 1-3 Tas Bekal."),this.host.replaceChildren(e.domElement),this.scene=new pr,this.camera=new mn(50,1,.1,280),this.shapes=new iu,this.world=new ou(this.shapes,this.scene,this.progress),this.player=new ru(this.shapes,this.scene,this.progress),this.mouseModels=new cu(this.scene),this.cameraRig=new du(this.camera,this.world,this.prefs,this.progress.yaw),this.collectibles=new uu(this.shapes,this.scene,this.progress),this.effects=new hu(this.shapes,this.scene),this.ui.setNpcs(this.world.npcs),this.combat=new fu(this.world,{scratch:(t,n,a=Ye.damage)=>{const s=this.world.surfaceAt(t);if(this.ui.float(`−${a}`,t.x,s+.95,t.z),this.effects.burst({x:t.x,y:s+.35,z:t.z},"hit",t.hp===0?16:9),this.effects.burst({x:t.x,y:s+.3,z:t.z},"crit",4),t.hp===0){this.progress.kills++,this.waveCaught++,this.progress.coins+=2,this.ui.collect("coin"),this.progress.addStat("happiness",2.5),this.effects.pulse(t.x,t.z,"#f3cf7b",.45,0,s+.06),this.ui.float("+2 koin",t.x,s+1.35,t.z,"heal",.95);const o=this.progress.favors.pandan_mice;(o==null?void 0:o.status)==="active"&&this.progress.favorProgress("pandan_mice")===Qn.pandan_mice.goal&&this.ui.toast("Permintaan Pandan siap!","Kembali ke Pandan di Ladang Barat untuk ambil hadiah.","star",!0),this.checkQuests()}},swipe:(t,n)=>{this.effects.slash(t,n>0),this.audio.sfx(n>0?"swipeHit":"swipeMiss")},shieldBlock:t=>{this.audio.sfx("shield"),this.effects.burst({x:t.x,y:t.y+.85,z:t.z},"shield",14),this.effects.pulse(t.x,t.z,"#a9d6ff",.52,0,t.y+.08),this.ui.float("Perisai!",t.x,t.y+1.8,t.z,"heal",.9),this.ui.toast("Perisai Bulu menahan gigitan!",this.progress.shieldCharges>0?`Sisa ${this.progress.shieldCharges} lapis perisai.`:"Perisai habis — kunjungi Salon Luna untuk isi ulang!","shield")},bite:t=>{this.ui.hitFlash(),this.ui.float("−5",t.x,t.y+1.68,t.z,"hurt",.82),this.effects.burst({x:t.x,y:t.y+.65,z:t.z},"hurt",10),this.audio.sfx("bite")},fatal:()=>{this.dying=!0,this.player.stop(),this.audio.sfx("loss")},eatStart:()=>{this.audio.sfx("chew")},chew:(t,n)=>{this.audio.sfx("chew"),n&&this.effects.burst({x:n.x,y:.2,z:n.z},"dust",5)},eat:(t,n,a)=>{n&&this.removeMouse(n),this.progress.eaten++,this.progress.addStat("hunger",Ye.eatHunger),this.progress.addStat("happiness",Ye.eatHappiness),this.effects.healBurst(t),this.audio.sfx("heal"),this.ui.float(a>0?`+${Math.round(a)} HP`:"Kenyang!",t.x,t.y+1.9,t.z,"heal",1.25),this.ui.toast(a>0?`+${Math.round(a)} HP & Kenyang!`:"Santapan Lezat!",a>0?`Nyawa pulih · +${Ye.eatHunger} lapar · +${Ye.eatHappiness} bahagia`:`Nyawa penuh · +${Ye.eatHunger} lapar · +${Ye.eatHappiness} bahagia`,"paw"),this.checkQuests(),this.save()}}),this.mouseService={alert:t=>{const n=t.x-this.player.x,a=t.z-this.player.z;n*n+a*a<85&&this.audio.sfx("squeak")},windup:()=>{},bite:t=>this.combat.bite(this.player,t),miss:()=>this.audio.sfx("miss")},this.input=new pu(e.domElement,()=>this.active&&!this.dying&&!document.hidden,(t,n)=>this.cameraRig.look(t,n),t=>this.cameraRig.zoom(t)),this.elapsed=this.progress.time,this.last=0,this.uiClock=0,this.saveClock=0,this.shadowClock=0,this.slowTime=0,this.fishing=0,this.fishingSpot="pond",this.tutorialClock=0,this.currentVillage=null,this.currentEdible=null,this.location=null,this.wasSaving=!0,this.allCelebrated=this.progress.completed.size>=pa.length,this.progress.waveCleared||this.spawnWave(this.progress.wave),this.abort=new AbortController,window.addEventListener("resize",()=>this.resize(),{signal:this.abort.signal}),e.domElement.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.save(),this.setActive(!1),this.events.contextLost()},{signal:this.abort.signal}),this.resize(),this.cameraRig.update(1,this.player,{x:0,z:0}),this.world.update(0,this.elapsed,this.player),this.poseMice(),this.syncUI(),e.render(this.scene,this.camera),e.setAnimationLoop(t=>this.loop(t))}aliveMice(){let e=0;for(const t of this.mice)t.state!==Ie.DEAD&&e++;return e}spawnWave(e){this.clearMice(),this.waveCaught=0;const t=5+2*(e-1),n=this.world.spawnPositions(t,e,this.player);this.mice=n.map(([a,s],o)=>new lu(this.mouseModels,a,s,o,e,this.player));for(const a of this.mice)this.ui.addEnemy(a);this.poseMice()}nextWave(){!this.progress.waveCleared||this.player.eatT>=0||this.dying||(this.progress.wave++,this.progress.waveCleared=!1,this.player.attackT=-1,this.player.cooldown=0,this.spawnWave(this.progress.wave),this.audio.sfx("quest"),this.ui.toast(`Wave ${ma(this.progress.wave)} Dimulai!`,`${this.mice.length} tikus ladang baru berkeliaran (Jalan Niaga & Cat Café tetap aman).`,"claw",!0),this.syncUI(),this.save())}respawnAtHome(){this.dying=!1,this.progress.stats.hp=this.progress.maxHp,this.progress.stats.energy=Math.max(85,this.progress.stats.energy),this.progress.stats.hunger=Math.max(55,this.progress.stats.hunger),this.player.revive(un.x,un.z,un.yaw,this.world),this.progress.position.x=un.x,this.progress.position.z=un.z,this.cameraRig.ready=!1,this.ui.clearWorldOverlays(),this.ui.setNpcs(this.world.npcs),this.progress.waveCleared||this.spawnWave(this.progress.wave),this.effects.clearTransient(),this.audio.sfx("meow"),this.ui.toast("Oyen bangun di rumah!","Nyawa penuh kembali. Siap lanjut bertualang!","home"),this.syncUI(),this.save()}removeMouse(e){const t=this.mice.indexOf(e);t<0||(this.mouseModels.remove(e.rig),this.ui.removeEnemy(e),this.mice.splice(t,1))}clearMice(){for(const e of this.mice)this.mouseModels.remove(e.rig),this.ui.removeEnemy(e);this.mice.length=0}poseMice(){for(const e of this.mice)this.mouseModels.pose(e,this.elapsed,this.world.surfaceAt(e))}resize(){const e=this.host.clientWidth||window.innerWidth,t=this.host.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e/t<.9?62:50,this.camera.updateProjectionMatrix(),this.ui.resize(e,t),!this.active&&this.scene&&this.renderer.render(this.scene,this.camera)}setActive(e){var t,n;this.dead||(this.active=e,this.last=0,(t=this.input)==null||t.clear(),this.audio.setAmbient(e&&!this.dying),e?this.renderer.domElement.focus({preventScroll:!0}):((n=this.player)==null||n.stop(),this.audio.quiet()))}applySettings(){this.renderer.shadowMap.enabled!==this.prefs.shadows&&(this.renderer.shadowMap.enabled=this.prefs.shadows,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),this.ui.controlHints(this.prefs.hints)}loop(e){if(this.dead)return;if(!this.active||document.hidden){this.last=0;return}const t=this.last?(e-this.last)/1e3:1/60;this.last=e;const n=Math.min(Math.max(0,t),.1);this.step(n),this.shadowClock+=n,this.shadowClock>=.08&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowClock=0),this.renderer.render(this.scene,this.camera),t>.048?this.slowTime+=Math.min(t,.2):this.slowTime=Math.max(0,this.slowTime-n*.4),this.slowTime>3.5&&this.pixelRatio>.74&&(this.pixelRatio=Math.max(.72,this.pixelRatio-.18),this.renderer.setPixelRatio(this.pixelRatio),this.slowTime=0)}step(e){if(this.elapsed+=e,this.dying){this.player.die(e,this.elapsed,this.world),this.effects.update(e),this.cameraRig.update(e,this.player,{x:0,z:0}),this.poseMice(),this.ui.updateWorldOverlays(e,this.camera,this.player,this.mice,this.world,this.progress),this.player.death>=1&&(this.setActive(!1),this.events.gameOver());return}const t=this.input.axes();let n=this.input.take("Space");this.player.sleeping&&(n||Math.abs(t.x)+Math.abs(t.z)>.12)&&(this.wake(),n=!1),this.input.takeAttack()&&(this.dismissTutorial(),this.combat.tryAttack(this.player,this.mice,this.cameraRig.forwardYaw)),this.input.take("Digit1")&&this.useItem("salmon"),this.input.take("Digit2")&&this.useItem("milk"),this.input.take("Digit3")&&this.useItem("catnip"),this.player.update(e,this.elapsed,t,n,this.cameraRig.movementBasis(t),this.world,this.progress,this.audio,this.mice,this.effects),this.player.sleeping&&(this.player.root.position.y=this.world.bed.y+.04,this.player.vy=0,this.player.grounded=!0),this.combat.update(this.player,this.mice,e);for(const o of this.mice){if(this.dying)break;o.update(e,this.player,this.world,this.mice,this.mouseService)}if(this.poseMice(),!this.progress.waveCleared&&this.aliveMice()===0){this.progress.waveCleared=!0;const o=5*this.progress.wave;this.progress.coins+=o,this.audio.sfx("victory"),this.effects.burst({x:this.player.x,y:this.player.y+1.1,z:this.player.z},"star",22),this.ui.toast(`Wave ${ma(this.progress.wave)} Selesai!`,`Desa aman! Bonus +${o} koin. Tekan N untuk Wave berikutnya.`,"star",!0),this.syncUI(),this.save()}this.input.take("KeyN")&&this.progress.waveCleared&&this.nextWave(),this.progress.update(e,this.player.running,this.player.sleeping),this.world.update(e,this.elapsed,this.player),this.collectibles.update(e,this.elapsed,this.player,o=>this.collect(o)),this.effects.update(e),this.fishing>0&&(this.fishing=Math.max(0,this.fishing-e),this.fishing===0&&(this.fishingSpot==="river"?this.progress.lastRiverCatch=this.progress.time:this.progress.lastCatch=this.progress.time,this.progress.collect("fish"),this.audio.sfx("fish"),this.effects.burst(this.player.root.position,"fish"),this.ui.toast(this.fishingSpot==="river"?"Ikan sungai segar didapat!":"Ikan kolam segar didapat!","+1 ikan · +4 bahagia (bisa dijual ke Miso)","fish"),this.checkQuests(),this.save())),this.input.take("KeyE")&&this.interact(),this.cameraRig.update(e,this.player,t),this.progress.yaw=this.cameraRig.yaw,this.audio.update(e);const a=this.player.attackT>=0?this.player.attackHeading:this.player.heading,s=this.mice.some(o=>this.combat.valid(this.player,o,a)||this.combat.valid(this.player,o,this.cameraRig.forwardYaw));this.ui.targeting(s,this.player.cooldown>.06),this.ui.updateWorldOverlays(e,this.camera,this.player,this.mice,this.world,this.progress),this.player.eatT>=0&&this.ui.prompt("Sedang makan tikus…",!0,this.player.eatT/Ye.eatTime),this.uiClock+=e,this.saveClock+=e,this.tutorialClock+=e,this.uiClock>=.09&&(this.syncUI(),this.uiClock=0),this.saveClock>7&&(this.save(),this.saveClock=0),this.tutorialClock>16&&!this.progress.tutorialSeen&&this.dismissTutorial()}collect(e){this.progress.collect(e.type,e.id)&&(this.audio.sfx(e.type),this.effects.burst(e.mesh.position,e.type,e.type==="star"?22:13),this.ui.collect(e.type),this.ui.toast({fish:"Ikan ditemukan!",coin:"Koin berkilau!",star:"Bintang desa ditemukan!"}[e.type],{fish:"+1 ikan · +4 bahagia",coin:"+1 koin",star:"+1 bintang · +7 bahagia"}[e.type],e.type),this.checkQuests(),this.save())}checkQuests(){for(const e of this.progress.resolveQuests()){this.ui.toast(`Misi Selesai: ${e.name}`,`+${e.reward} koin masuk ke tas Oyen`,"star",!0),this.audio.sfx("quest");const t=this.player.root.position.clone();t.y+=1.2,this.effects.burst(t,"star",24),this.progress.completed.size>=pa.length&&!this.allCelebrated&&(this.allCelebrated=!0,this.ui.toast("Legenda Willowbrook!","Semua misi selesai! Nikmati desa, semua toko kucing, & wave berikutnya.","paw",!0))}}syncUI(){var n;const e=this.world.locationAt(this.player.root.position);e?(this.progress.visit(e.id)&&this.location&&this.ui.toast("Lokasi baru ditemukan",e.name,"pin"),this.location=e.name,this.checkQuests()):this.location="Jalan Desa Willowbrook",this.currentEdible=this.player.eatT<0?this.combat.edible(this.player,this.mice):null,this.currentVillage=this.world.nearest(this.player);const t=this.aliveMice();this.ui.hud(this.progress,this.location,this.player.sleeping?"Tidur":this.fishing>0?"Memancing":this.player.cat.animState,t,this.player.eatT>=0),this.player.eatT>=0?this.ui.prompt("Sedang makan tikus…",!0,this.player.eatT/Ye.eatTime):this.player.sleeping?this.ui.prompt("Bangunkan Oyen",!1,-1):this.fishing>0?this.ui.prompt("Menunggu umpan disambar…",!0,-1):this.shouldPrioritizeEat()?this.ui.prompt("Makan tikus (+30 HP)",!1,-1):this.ui.prompt(((n=this.currentVillage)==null?void 0:n.label)||"",!1,-1)}shouldPrioritizeEat(){if(!this.currentEdible)return!1;if(!this.currentVillage)return!0;const e=Math.hypot(this.currentEdible.x-this.player.x,this.currentEdible.z-this.player.z),t=Math.hypot(this.currentVillage.point.x-this.player.x,this.currentVillage.point.z-this.player.z);return this.progress.stats.hp<this.progress.maxHp||e<=t}dismissTutorial(){this.progress.tutorialSeen=!0,this.ui.hideTutorial()}wake(){this.player.sleeping=!1,this.audio.sfx("meow"),this.ui.toast("Oyen bangun segar!",`HP ${Math.round(this.progress.stats.hp)}/${this.progress.maxHp} · Energi ${Math.round(this.progress.stats.energy)}`,"sun"),this.save()}toggleDoor(e){const t=this.progress,n=this.world,a=n.doors[e];if(!a)return;if(a.open){const o=mr(this.player.root.position,a.b);if(Math.abs(o.x)<a.b.hw+.34&&Math.abs(o.z)<.55){this.ui.toast("Mundur sedikit","Menjauh dari ambang pintu untuk menutupnya.","home");return}}const s=!a.open;e==="home"?t.door=s:t.shopDoors[e]=s,n.setDoor(s,!1,e),this.audio.sfx("door")}interact(){var a;if(!this.active||this.dying)return;if(this.player.sleeping){this.wake(),this.syncUI();return}if(this.fishing>0||this.player.eatT>=0)return;if(this.currentEdible=this.combat.edible(this.player,this.mice),this.currentVillage=this.world.nearest(this.player),this.shouldPrioritizeEat()){this.dismissTutorial(),this.combat.tryEat(this.player,this.mice),this.syncUI();return}const e=this.currentVillage;if(!e){this.ui.toast("Tidak ada interaksi di dekat sini","Dekati kucing warga, pemilik toko, tikus kalah, dermaga, bola benang, atau rumah Oyen.","compass");return}this.dismissTutorial();const t=this.progress,n=this.world;if(e.id.startsWith("cat:")){const s=((a=e.meta)==null?void 0:a.catId)||e.id.slice(4),o=t.meetCat(s);if(n.emoteNpc(s),this.audio.sfx("meow"),o){const r=yn[s];this.ui.toast(`Kenalan baru: ${(r==null?void 0:r.name)||s}!`,"Tercatat di Jurnal → tab Warga & Toko.","chat"),this.checkQuests()}this.save(),this.events.dialogue(s);return}switch(e.id){case"door":this.toggleDoor("home");break;case"door_boutique":this.toggleDoor("boutique");break;case"door_salon":this.toggleDoor("salon");break;case"bed":this.player.sleeping=!0,this.player.stop(),this.player.root.position.set(n.bed.x,n.bed.y+.04,n.bed.z),this.player.root.rotation.y=1.7,this.audio.sfx("sleep"),this.ui.toast("Tidur siang yang nyaman","Energi & HP pulih otomatis (aman dari tikus). Tekan E atau bergerak untuk bangun.","moon");break;case"bowl":if(t.stats.hunger>=99&&t.stats.hp>=t.maxHp)this.ui.toast("Perut kenyang & sehat!","Kembali makan setelah berburu atau bertualang.","bowl");else{const s=t.fish>0;s&&t.fish--;const o=s?25:15,r=t.stats.hp;t.addStat("hunger",s?35:23),t.addStat("hp",o),t.addStat("happiness",s?4:2);const f=Math.round(t.stats.hp-r);this.audio.sfx("meow"),f>0&&this.ui.float(`+${f} HP`,this.player.x,this.player.y+1.85,this.player.z,"heal",1.1),this.ui.toast(s?"Makan malam ikan segar!":"Semangkuk kibble renyah",`Lapar terisi${f>0?` · +${f} HP`:""} · ${s?"1 ikan digunakan":"gratis di rumah"}`,"bowl"),this.effects.burst(e.point,"heart")}break;case"yarn":case"yarn_cafe":if(t.time-t.lastPlay<4){this.ui.toast("Bola benang masih menggelinding","Tunggu sebentar sebelum bermain lagi.","heart");break}t.lastPlay=t.time,e.id==="yarn_cafe"?n.cafePlayTimer=1.6:n.playTimer=1.6,t.addStat("happiness",10),t.addStat("energy",-1),this.player.vy=3.2,this.player.grounded=!1,this.audio.sfx("meow"),this.effects.burst(e.point,"heart"),this.ui.toast("Loncat & tangkap benang!","+10 bahagia","heart");break;case"lamp":t.lamp=!t.lamp,n.setLamp(t.lamp),this.audio.sfx("ui"),this.ui.toast(t.lamp?"Lentera dinyalakan":"Lentera dimatikan",t.lamp?"Cahaya hangat menerangi alun-alun desa.":"Kunang-kunang menari di jalanan desa.","sun");break;case"pond":case"river_pond":{const s=e.id==="river_pond",o=s?t.lastRiverCatch:t.lastCatch;if(t.time-o<10){this.ui.toast(s?"Arus sungai masih beriak":"Air kolam masih beriak",`Coba lagi dalam ${Math.ceil(10-t.time+o)} detik.`,"fish");break}this.fishing=1.55,this.fishingSpot=s?"river":"pond",this.player.busy=1.55,this.player.stop(),this.audio.sfx("ui"),this.ui.toast(s?"Memancing di tepi sungai…":"Mulai memancing…","Tunggu pelampung bergoyang!","fish");break}}this.checkQuests(),this.syncUI(),this.save()}useItem(e){if(!this.active||this.dying)return!1;const t=ga[e],n=this.progress;if(!t)return!1;if((n.pouch[e]||0)<=0)return this.ui.toast(`${t.name} habis`,e==="salmon"?"Beli Salmon Bakar di Pasar Ikan Miso!":"Beli di Kedai Susu & Catnip Mochi (Selatan)!",t.icon),!1;if(n.pouch[e]--,t.catnipDuration)n.catnipTimer=Math.max(n.catnipTimer,t.catnipDuration),n.addStat("happiness",t.happiness||10),this.audio.sfx("catnip"),this.effects.burst({x:this.player.x,y:this.player.y+.6,z:this.player.z},"catnip",24),this.effects.pulse(this.player.x,this.player.z,"#94f2a6",.65,0,this.player.y+.08),this.ui.float("CATNIP!",this.player.x,this.player.y+1.9,this.player.z,"heal",1.2),this.ui.toast("Mode Catnip Aktif! (25 detik)","Lari +32% · Stamina tak berkurang · Cakar +10 dmg!","leaf",!0);else{const a=n.stats.hp;t.hp&&n.addStat("hp",t.hp),t.hunger&&n.addStat("hunger",t.hunger),t.energy&&n.addStat("energy",t.energy),t.happiness&&n.addStat("happiness",t.happiness);const s=Math.round(n.stats.hp-a);this.audio.sfx("heal"),this.effects.healBurst(this.player),this.ui.float(s>0?`+${s} HP`:`${t.short}!`,this.player.x,this.player.y+1.9,this.player.z,"heal",1.15),this.ui.toast(`Menikmati ${t.name}!`,t.desc,t.icon)}return this.checkQuests(),this.syncUI(),this.save(),!0}snack(){if(this.progress.time-this.progress.lastSnack<40)return!1;this.progress.lastSnack=this.progress.time;const e=this.progress.stats.hp;this.progress.addStat("hunger",22),this.progress.addStat("hp",15),this.progress.addStat("happiness",4);const t=Math.round(this.progress.stats.hp-e);return this.audio.sfx("meow"),this.ui.toast("Camilan dari Miso!",`+22 lapar${t>0?` · +${t} HP`:""} · +4 bahagia`,"bowl"),this.checkQuests(),this.syncUI(),this.save(),!0}sellFish(e){const t=this.progress;if(t.fish<1)return null;const n=e==="all"?t.fish:1,a=n*xr;return t.fish-=n,t.coins+=a,t.shopPurchases++,this.audio.sfx("buy"),this.ui.collect("coin"),this.world.emoteNpc("miso"),this.ui.toast(`Terjual ${n} ikan segar!`,`+${a} koin masuk ke tas Oyen.`,"coin"),this.checkQuests(),this.syncUI(),this.save(),`“Ikan segar kualitas top! Ini ${a} koin untukmu, Oyen. Terima kasih sudah mampir!”`}buyConsumable(e,t){const n=ga[t],a=this.progress;if(!n)return null;const s=a.priceFor(e,n.price);return a.coins<s?null:(a.coins-=s,a.pouch[t]=(a.pouch[t]||0)+1,a.shopPurchases++,this.audio.sfx("buy"),this.world.emoteNpc(e),this.ui.toast(`${n.name} dibeli!`,`Masuk Tas Bekal [${n.slot}] (total: ${a.pouch[t]}).`,n.icon),this.checkQuests(),this.syncUI(),this.save(),`“${n.name} sudah dibungkus rapi ke Tas Bekal [${n.slot}]! Tekan tombol ${n.slot} kapan saja saat butuh.”`)}buyInstant(e,t){const n=this.progress,a=t==="tuna_feast"?{name:"Fillet Tuna Spesial",base:10,hp:35,hunger:100,energy:15,happy:12,reply:"“Wah, lahap sekali makannya! Semoga tenaga dan nyawamu penuh lagi ya, Oyen!”"}:{name:"Kue Ikan Hangat",base:6,hp:10,hunger:30,energy:25,happy:15,reply:"“Kue ikan hangat baru keluar dari oven! Senang melihat ekor Oyen bergoyang bahagia!”"},s=n.priceFor(e,a.base);return n.coins<s?null:(n.coins-=s,n.shopPurchases++,n.addStat("hp",a.hp),n.addStat("hunger",a.hunger),n.addStat("energy",a.energy),n.addStat("happiness",a.happy),this.audio.sfx("heal"),this.world.emoteNpc(e),this.effects.healBurst(this.player),this.ui.toast(`Menikmati ${a.name}!`,"Status Oyen langsung pulih & ceria.","bowl"),this.checkQuests(),this.syncUI(),this.save(),a.reply)}buyScarf(e,t){const n=Fn[t],a=this.progress;if(!n||a.ownedScarves.has(t))return null;const s=a.priceFor(e,n.price);return a.coins<s?null:(a.coins-=s,a.ownedScarves.add(t),a.equipped.scarf=t,a.shopPurchases++,a.addStat("happiness",8),this.player.syncAppearance(),this.audio.sfx("buy"),this.world.emoteNpc(e),this.effects.burst({x:this.player.x,y:this.player.y+1.1,z:this.player.z},"star",18),this.ui.toast(`${n.name} dipakai!`,"Kini bisa diganti gratis kapan saja di Butik Nori.","hat",!0),this.checkQuests(),this.syncUI(),this.save(),`“Cantik sekali, Oyen! ${n.name} langsung kupasangkan di lehermu.”`)}equipScarf(e){const t=Fn[e];return!t||!this.progress.ownedScarves.has(e)?null:(this.progress.equipped.scarf=e,this.player.syncAppearance(),this.audio.sfx("ui"),this.syncUI(),this.save(),`“Gaya baru! Sekarang kamu memakai ${t.name}.”`)}buyHat(e,t){const n=_a[t],a=this.progress;if(!n||a.ownedHats.has(t))return null;const s=a.priceFor(e,n.price);return a.coins<s?null:(a.coins-=s,a.ownedHats.add(t),a.equipped.hat=t,a.shopPurchases++,a.addStat("happiness",10),this.player.syncAppearance(),this.audio.sfx("buy"),this.world.emoteNpc(e),this.effects.burst({x:this.player.x,y:this.player.y+1.3,z:this.player.z},"star",20),this.ui.toast(`${n.name} dipakai!`,"Aksesoris 3D langsung tampil di kepala Oyen!","hat",!0),this.checkQuests(),this.syncUI(),this.save(),`“Pas sekali di antara telingamu! ${n.name} bikin Oyen makin keren di seluruh desa!”`)}equipHat(e){const t=_a[e];return!t||!this.progress.ownedHats.has(e)?null:(this.progress.equipped.hat=e,this.player.syncAppearance(),this.audio.sfx("ui"),this.syncUI(),this.save(),e==="none"?"“Topi dilepas dengan rapi. Telingamu bisa bebas bergoyang lagi!”":`“${t.name} sudah terpasang manis di kepalamu!”`)}buyUpgrade(e,t){const n=gr.find(r=>r.id===t),a=this.progress;if(!n)return null;const s=a.upgrades[t]||0;if(s>=n.maxLevel)return null;const o=a.priceFor(e,n.prices[s]);return a.coins<o?null:(a.coins-=o,a.upgrades[t]=s+1,a.shopPurchases++,t==="vitality"&&a.addStat("hp",20),this.audio.sfx("quest"),this.world.emoteNpc(e),this.effects.burst({x:this.player.x,y:this.player.y+1.1,z:this.player.z},"star",22),this.ui.toast(`${n.name} Lv ${s+1}!`,n.descs[s],n.icon,!0),this.checkQuests(),this.syncUI(),this.save(),`“Mantap, Oyen! ${n.name} kini naik ke Level ${s+1}—${n.descs[s]}”`)}buySpa(e,t){const n=_r.find(o=>o.id===t),a=this.progress;if(!n)return null;const s=a.priceFor(e,n.price);return a.coins<s?null:(a.coins-=s,a.shopPurchases++,a.stats.hp=a.maxHp,a.stats.energy=100,a.addStat("happiness",100),n.shield>0?(a.stats.hunger=100,a.shieldCharges=Math.max(a.shieldCharges,n.shield),this.audio.sfx("shield"),this.effects.burst({x:this.player.x,y:this.player.y+.8,z:this.player.z},"shield",24)):(this.audio.sfx("heal"),this.effects.healBurst(this.player)),this.world.emoteNpc(e),this.ui.toast(`${n.name} selesai!`,n.shield>0?`Semua status penuh + Perisai Bulu (${a.shieldCharges} lapis)!`:"Bulu Oyen harum berkilau! Nyawa, Energi, & Bahagia penuh.",n.icon,!0),this.checkQuests(),this.syncUI(),this.save(),n.shield>0?"“Selesai! Bulumu lembut wangi dan dilindungi Perisai Bulu 3 lapis. Selamat berburu dengan aman!”":"“Nah, bulumu sudah berkilau dan wangi bunga kamomil! Rasanya jauh lebih segar, kan?”")}celebrateFriendship(e,t){const n=yn[e],a=this.world.getNpc(e);a&&(a.cat.triggerEmote(),this.effects.burst({x:a.x,y:a.cat.root.position.y+1.2,z:a.z},"heart",16)),t.reachedMax&&n?(this.audio.sfx("quest"),n.shopType?this.ui.toast(`Sahabat Dekat: ${n.name} (3♥)!`,`Diskon 20% permanen terbuka di ${n.shopName}!`,"star",!0):n.bestFriendGift&&(this.progress.coins+=n.bestFriendGift.coins||0,n.bestFriendGift.item&&(this.progress.pouch[n.bestFriendGift.item]=(this.progress.pouch[n.bestFriendGift.item]||0)+1),this.ui.toast(`Sahabat Dekat: ${n.name} (3♥)!`,`Hadiah sahabat: ${n.bestFriendGift.text} + cerita rahasia terbuka!`,"gift",!0))):t.leveledUp&&n&&(this.audio.sfx("heart"),this.ui.toast(`Makin akrab dengan ${n.name}!`,`Tingkat keakraban: ${t.level}/3 Hati.`,"heart"))}greetCat(e){var r;const t=yn[e],n=this.progress;if(!t)return null;if(n.getFriendship(e)>=3)return n.addStat("happiness",4),this.audio.sfx("meow"),this.world.emoteNpc(e),this.syncUI(),this.save(),"“Meong~! Senang sekali selalu disapa sahabat terbaikku, Oyen! (+4 Bahagia)”";const s=n.lastChatHeart[e]??-100;if(n.time-s<45)return null;n.lastChatHeart[e]=n.time,n.addStat("happiness",5);const o=n.addFriendship(e,1);return this.celebrateFriendship(e,o),this.checkQuests(),this.syncUI(),this.save(),o.reachedMax?t.shopType?`“Kamu teman terbaikku di Willowbrook, Oyen! Mulai sekarang semua barang di ${t.shopName} diskon 20% khusus untukmu!”`:`“Terima kasih selalu mengobrol denganku, Oyen! Ini hadiah kecil tanda persahabatan kita (${(r=t.bestFriendGift)==null?void 0:r.text}).”`:"“Haha, hangat sekali sapaanmu, Oyen! Aku jadi makin akrab denganmu (+1♥ · +5 Bahagia).”"}giftFish(e){var s;const t=yn[e],n=this.progress;if(!t||n.fish<1||n.getFriendship(e)>=3)return null;n.fish--,n.addStat("happiness",6);const a=n.addFriendship(e,1);return this.celebrateFriendship(e,a),this.checkQuests(),this.syncUI(),this.save(),a.reachedMax?t.shopType?`“Wah, ikan segar untukku?! Kamu benar-benar sahabat terbaik! Diskon 20% permanen di ${t.shopName} kini aktif untukmu!”`:`“Ikan segar?! Makasih banyak, Oyen! Sebagai balasan sahabat terbaik, terimalah ${(s=t.bestFriendGift)==null?void 0:s.text}!”`:"“Mmm, ikan segar yang enak sekali! Terima kasih banyak ya, Oyen! (+1♥ · +6 Bahagia)”"}acceptFavor(e){const t=Qn[e],n=this.progress;return!t||n.favors[e]?null:(n.favors[e]={status:"active",startKills:n.kills},this.audio.sfx("ui"),this.world.emoteNpc(t.catId),this.ui.toast(`Permintaan diterima: ${t.title}`,t.desc,"star"),this.save(),`“Makasih mau membantu, Oyen! ${t.desc}”`)}completeFavor(e){const t=Qn[e],n=this.progress,a=n.favors[e];if(!t||!a||a.status!=="active"||n.favorProgress(e)<t.goal)return null;t.kind==="item"&&(n.pouch[t.item]-=t.goal),t.kind==="fish"&&(n.fish-=t.goal),a.status="done",n.coins+=t.rewardCoins,t.rewardItem&&(n.pouch[t.rewardItem]=(n.pouch[t.rewardItem]||0)+1),n.addStat("happiness",15);const s=n.addFriendship(t.catId,1);return this.celebrateFriendship(t.catId,s),this.audio.sfx("quest"),this.ui.collect("coin"),this.ui.toast(`Permintaan Selesai: ${t.title}!`,t.rewardText,"star",!0),this.checkQuests(),this.syncUI(),this.save(),`“Hore, terima kasih banyak, Oyen!! Ini hadiah untukmu (${t.rewardText}). Kamu memang kucing paling baik di Willowbrook!”`}save(){const e=vr.save(this.progress.snapshot());return!e&&this.wasSaving&&this.ui.toast("Sesi bermain sementara","Penyimpanan lokal diblokir; progres hanya bertahan di sesi ini.","info"),this.wasSaving=e,e}dispose(){var e,t,n,a,s,o,r,f,d,l,c,g;this.dead||(this.active=!1,this.dead=!0,(e=this.renderer)==null||e.setAnimationLoop(null),(t=this.abort)==null||t.abort(),(n=this.input)==null||n.dispose(),this.audio.quiet(),this.clearMice(),(a=this.mouseModels)==null||a.dispose(),(s=this.ui)==null||s.clearWorldOverlays(),(o=this.effects)==null||o.dispose(),(r=this.world)==null||r.dispose(),(f=this.scene)==null||f.clear(),(d=this.shapes)==null||d.dispose(),(l=this.renderer)==null||l.dispose(),(c=this.renderer)==null||c.forceContextLoss(),(g=this.renderer)==null||g.domElement.remove())}}export{gu as Game};
