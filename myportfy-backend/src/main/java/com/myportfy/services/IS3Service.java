package com.myportfy.services;

import java.io.InputStream;
import java.net.URI;

public interface IS3Service {
    URI uploadFile(InputStream is, String fileName, String contentType);
    void deletePicture(String key);
}
