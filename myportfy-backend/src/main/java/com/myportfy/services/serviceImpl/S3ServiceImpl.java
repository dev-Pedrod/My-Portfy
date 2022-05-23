package com.myportfy.services.serviceImpl;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.myportfy.services.IS3Service;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
@Slf4j
public class S3ServiceImpl implements IS3Service {

    @Autowired
    private AmazonS3 amazonS3;
    @Value("${s3.bucket}")
    private String bucketName;

    @Override
    public void uploadFile(String localFilePath) {
        try {
            File file = new File(localFilePath);
            log.info("starting upload");
            amazonS3.putObject(new PutObjectRequest(bucketName, "teste", file));
            log.info("upload finished");
        } catch (AmazonServiceException e) {
            log.error("AmazonServiceException: {}", e.getErrorMessage());
            log.error("Status code: {}", e.getErrorCode());
        } catch (AmazonClientException e) {
            log.error("AmazonClientException: {}", e.getMessage());
        }
    }
}
