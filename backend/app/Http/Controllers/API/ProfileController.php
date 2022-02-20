<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function store(Request $request)
    {
        $profile = new Profile;
        $profile->name = $request->input('name');
        $profile->description = $request->input('description');
        $profile->tel = $request->input('tel');
        $profile->email = $request->input('email');
        $profile->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Profile saved successfully'
        ]);
    }

    public function index(){
        $profile = Profile::all();
        return response()->json([
            'status'=> 200,
            'profile'=>$profile,
        ]);
    }

    public function edit($id){
        $profile = Profile::find($id);
        return response()->json([
            'status'=> 200,
            'profile'=>$profile,
        ]);
    }

    public function update(Request $request ,$id){
        $profile = Profile::find($id);
        $profile->name = $request->input('name');
        $profile->description = $request->input('description');
        $profile->tel = $request->input('tel');
        $profile->email = $request->input('email');
        $profile->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Profile updated'
        ]);
    }
}
